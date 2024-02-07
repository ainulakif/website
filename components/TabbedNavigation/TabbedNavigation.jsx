"use client";

import React, { useState } from 'react';
import Weather from '@components/weather/Weather';
import Feed from '@components/Feed';
import TabbedChart from '@components/countries/TabbedChart';

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
          <button className='tabbed_btn rounded-l-lg' onClick={() => handleTabClick('tab1')}>Weather</button>
          <button className='tabbed_btn' onClick={() => handleTabClick('tab2')}>Post</button>
          <button className='tabbed_btn rounded-r-lg' onClick={() => handleTabClick('tab3')}>Population</button>
        </div>
        {
          activeTab === 'tab1' &&
          <Weather />
        }
        {
          activeTab === 'tab2' &&
          <Feed />
        }
        {
          activeTab === 'tab3' &&
          <TabbedChart />
        }
      </section>
    </div>
    // </section>
  );
};

export default TabbedNavigation;