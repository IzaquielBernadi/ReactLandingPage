import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Component Text',
    image: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    image: { type: 'string' },
    link: { type: 'string' },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  image: '',
};
