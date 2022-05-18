import PresentsGroup from './PresentsGroup';
import groups from './../api/PresentsData.json';
import HeaderListView from './HeaderListView';
import useViewPort from '../hooks/UseViewPort';


const PresentsListView = () => {
  // RESPONSIVE LAYOUT
  const { width } = useViewPort();
  const breakpoint = 801;

  const presentsGroup = groups.map(group =>(  // Map the json & generate groups passing data as props
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
      {width < breakpoint ? <section className='listView__groupsContainer'>{presentsGroup}</section>
      :
      <section className='listView__groupsContainer--horizontal'>
        <div className='listView__groupsContainer--scroller'>{presentsGroup}</div>        
      </section>
      }      
    </section>
  )
}

export default PresentsListView;