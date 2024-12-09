import { Inter, Lusitana, Sixtyfour} from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight:['400'], subsets: ['latin'] });
export const sixtyfour = Sixtyfour({subsets: ['latin']});
export const shred = localFont({src: 'Shred_Handed.otf'});
