import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate sit optio perferendis nisi mollitia
          nulla velit doloremque. Eum dolore mollitia alias molestias maxime praesentium unde in est repellendus veniam?
        </p>
      </div>
    ),
    background: false,
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
