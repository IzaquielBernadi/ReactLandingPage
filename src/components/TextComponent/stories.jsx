import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt labore exercitationem voluptatem tempora esse, obcaecati, doloremque, dolore ipsum voluptas reprehenderit praesentium veniam nemo reiciendis rem ipsa sit. Culpa, minima temporibus.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
