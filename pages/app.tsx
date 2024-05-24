// _app.tsx

import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global styles here

function MyApp({ Component, pageProps }: AppProps) {
  // You can include layout components, context providers, etc. here
  return <Component {...pageProps} />;
}

export default MyApp;
