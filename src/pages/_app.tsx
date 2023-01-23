import { useState } from 'react';
import type { AppProps } from 'next/app'
import { Jeffism } from '@/types/types';
import { JeffismContext } from '@/context/jeffismContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [jeffisms, setJeffisms] = useState<Record<string, Jeffism>>({});

  return <JeffismContext.Provider value={{ jeffisms, setJeffisms }}>
    <Component {...pageProps} />
  </JeffismContext.Provider>
}
