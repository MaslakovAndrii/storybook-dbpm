import { ComponentStory } from "@storybook/react";
import { Meta } from "@storybook/react";
import { Icons } from "components_new/iconsList/icons";

export default {
  title: "Icons/all",
  component: Icons,
} as Meta;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const List = Template.bind({});
