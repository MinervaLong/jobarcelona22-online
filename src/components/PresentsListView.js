import React from 'react';
import PresentsGroup from './PresentsGroup';
import groups from './../api/PresentsData.json';
import HeaderListView from './HeaderListView';

const PresentsListView = () => {
  const presentsGroup = groups.map(group =>(
      <PresentsGroup
      key={group.id} 
      title={group.title}
      emo={group.emoji}
      description={group.description}
      tags={group.tags}
      />
    ))

  return (
    <section className='listView'>
      <HeaderListView />
      <section className='listView__groupsContainer'>{presentsGroup}</section>
    </section>
  )
}

export default PresentsListView;