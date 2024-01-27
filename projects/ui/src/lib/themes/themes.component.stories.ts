import {Meta, StoryObj} from '@storybook/angular';
import {ThemesComponent} from './themes.component';

const meta: Meta<ThemesComponent> = {
  title: 'Themes',
  component: ThemesComponent,
  parameters: {
    layout: 'centered'
  }
};
export default meta;

type Story = StoryObj<ThemesComponent>;

export const Default: Story = {
  args: {}
};
