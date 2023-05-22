import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from "components_new/tag";

export default {
  title: "ComponentsBPM/Tag",
  component: Tag,
  argTypes: {
    text: {
      table: { category: "Content" },
      type: "string",
      description:
        "The property accepts a string that will be displayed as the text of the tag.",
      defaultValue: "Label",
    },
    disabled: {
      table: { category: "State" },
      type: "boolean",
      description:
        "The property responsible for blocking interaction with the element.",
      defaultValue: false,
    },
    onClose: {
      table: { category: "Events" },
      type: "function",
      description:
        "The property accepts a function that is triggered on a click on the close button of the tag.",
    },
    onClick: {
      table: { category: "Events" },
      type: "function",
      description:
        "The property accepts a function that fires when the tag is clicked.",
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Example = Template.bind({});
