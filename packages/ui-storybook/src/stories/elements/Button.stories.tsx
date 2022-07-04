import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@engins/ui";
import "@engins/ui-styles/dist/eui.css";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Elements/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
  loading: false,
  secondary: false,
  disabled: false,
  ripple: true,
  onClickOrEnter: (event) => {
    console.log(event.type);
  },
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  primary: false,
  secondary: true,
  disabled: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Primary.args,
  disabled: true,
};
