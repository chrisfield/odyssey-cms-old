import dynamic from 'next/dynamic';

const components = {
  "c1": dynamic(import('./c1')),
  "c2": dynamic(import('./c2')),
  "c3": dynamic(import('./c3'))
};

const Slot = ({slot}) => {
  const Component = components[slot.template];
  const params = slot.params || {};
  return <Component {...params}/>;
};

export default Slot;
