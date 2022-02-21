import React, { useEffect, useState } from 'react';
import '../styles/globals.scss';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
