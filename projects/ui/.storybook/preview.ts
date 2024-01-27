import {setCompodocJson} from "@storybook/addon-docs/angular";
import {componentWrapperDecorator, Preview} from "@storybook/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Theme Switcher',
      defaultValue: 'core-light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        // https://github.com/storybookjs/icons/tree/main/src/icons
        items: [
          {value: 'core-light', title: 'Core', icon: 'sun'},
          {value: 'core-dark', title: 'Core', icon: 'moon'},
          {value: 'synthwave-light', title: 'Synthwave', icon: 'sun'},
          {value: 'synthwave-dark', title: 'Synthwave', icon: 'moon'}
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    }
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `${story}`,
      ({globals}) => {
        const root = document.documentElement;
        root.className = '';
        root.classList.add(`labs-${globals['theme']}-theme`);
        return {};
      }
    ),
  ],
};

export default preview;
