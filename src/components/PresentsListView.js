import React from 'react';
import PresentsGroup from './PresentsGroup'
import groups from './../api/PresentsData.json'

const PresentsListView = () => {
  return (
    <section className='listView'>
      <h1 className='listView__title'>Presents Management App</h1>
      <section className='listView__groupsContainer'>
        {groups.map(group =>(
          <PresentsGroup
          key={group.id} 
          title={group.title}
          emo={group.emoji}
          description={group.description}
          tags={group.tags}
          />
        ))}
        
      </section>
    </section>
  )
}

export default PresentsListView;