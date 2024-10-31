import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

/* export a secondary font Lusitana and pass it to the <p> element in /app/page.tsx file  */

export const lusitana = Lusitana ({
    weight: ['400', '700'],
    subsets: ['latin'],
  });