import React, { Fragment, useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Siderbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </Fragment>
  );
};

export default Home;
