import { NavLinks } from '.';
import links from './Mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
