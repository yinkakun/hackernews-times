/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/header';
import Footer from '@/components/footer';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title = '', description = '' }: LayoutProps) => (
  <Fragment>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <div className="flex flex-col min-h-full bg-yellowish-orange font-body text-raisin-black">
      <Header />
      <main className="flex items-center justify-center flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  </Fragment>
);

export default Layout;
