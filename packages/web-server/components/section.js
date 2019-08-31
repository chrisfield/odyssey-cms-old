import { useSelector } from 'react-redux';
import Slot from './slot';

const Section = () => {
  const section = useSelector(state => (state.section.values));
  return (
    <div>
      {section && section.slots.map((slot, index) => (
        <Slot key={index} slot={slot}/>
      ))}
    </div>
  );
};

export default Section;
