"use client";

import React, { useState } from 'react';
import Weather from '@components/weather/Weather';
import Feed from '@components/Feed';
import TabbedChart from '@components/countries/TabbedChart';
import ToDo from '@components/todo/ToDo';
import TodoList from '@components/todo/NewTodoList';

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
          <button className='tabbed_btn' onClick={() => handleTabClick('tab2')}>To-do</button>
          <button className='tabbed_btn' onClick={() => handleTabClick('tab3')}>Post</button>
          <button className='tabbed_btn rounded-r-lg' onClick={() => handleTabClick('tab4')}>Population</button>
        </div>
          {
            activeTab === 'tab1' &&
            <Weather />
          }
        {
          activeTab === 'tab2' &&
          <TodoList />
        }
        {
          activeTab === 'tab3' &&
          <Feed />
        }
        {
          activeTab === 'tab4' &&
          <TabbedChart />
        }
      </section>
    </div>
    // </section>
  );
};

export default TabbedNavigation;