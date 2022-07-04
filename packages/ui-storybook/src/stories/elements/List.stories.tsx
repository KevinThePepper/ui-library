import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List, ListItem } from "@engins/ui";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Elements/List",
  component: List,
  subcomponents: { ListItem }
} as ComponentMeta<typeof List>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Unordered = Template.bind({});

Unordered.args = {
  ordered: false,
  items: [
    "List item 1", "List item 2"
  ]
};

export const Ordered = Template.bind({});

Ordered.args = {
  ordered: true,
  items: [
    "List item 1",
    "List item 2"
  ]
}
