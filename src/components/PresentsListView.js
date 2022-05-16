import React from 'react';
import PresentsGroup from './PresentsGroup'

const PresentsListView = () => {
  return (
    <section className='listView'>
      <h1 className='listView__title'>Presents Management App</h1>
      <section className='listView__groupsContainer'>
        <PresentsGroup />
      </section>
    </section>
  )
}

export default PresentsListView;