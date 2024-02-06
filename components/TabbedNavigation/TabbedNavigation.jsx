"use client";

import React, { useState } from 'react';
import Weather from '@components/weather/Weather';
import Feed from '@components/Feed';

const TabbedNavigation = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    // <section className='feed'>
    <div className='tabbed_navigation'>
      <section className='feed'>
        <div className='tab_buttons'>
          <button onClick={() => handleTabClick('tab1')}>Tab 1</button>
          <button onClick={() => handleTabClick('tab2')}>Tab 2</button>
        </div>
        {
          activeTab === 'tab1' &&
          <Weather />
        }
        {
          activeTab === 'tab2' &&
          <Feed />
        }
      </section>
    </div>
    // </section>
  );
};

export default TabbedNavigation;