// @flow

import React, { memo } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

type Props = {
  children: any,
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="container-scroller">
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

MainLayout.defaultProps = {};
export default memo<Props>(MainLayout);
