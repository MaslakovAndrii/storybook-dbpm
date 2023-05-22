import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toggle } from "components_new/toggle";

export default {
  title: "ComponentsBPM/Toggle",
  component: Toggle,
  argTypes: {
    label: {
      table: { category: "Content" },
      type: "string",
      description: "The value of this property will appear in the label.",
      defaultValue: "Label",
    },
    id: {
      type: "string",
      description: "Property must be unique for each toggle element.",
      defaultValue: "id",
    },
    checked: {
      table: { category: "State" },
      type: "boolean",
      description: "Specifies the initial state.",
      defaultValue: false,
    },
    onChange: {
      table: { category: "Events" },
      action: ["onChange"],
      type: "function",
      description:
        "The property accepts a function that changes the state of the component.",
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args: any) => (
  <Toggle {...args} />
);

export const Example = Template.bind({});

Example.args = {
  checked: false,
};
