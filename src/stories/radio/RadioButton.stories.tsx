import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioButton } from "components_new/radioButton";

export default {
  title: "ComponentsBPM/RadioButton",
  component: RadioButton,
  argTypes: {
    label: {
      table: { category: "Content" },
      type: "string",
      description: "The value of this property will appear in the label.",
      defaultValue: "Label",
    },
    value: {
      table: { category: "Content" },
      type: "string",
      description:
        "This property contains the value of the button and will be passed to the submit handler.",
      defaultValue: "value",
    },
    name: {
      type: "string",
      description:
        "The value of this property must be unique for each group of radio buttons..",
      defaultValue: "name",
    },
    checked: {
      table: { category: "State" },
      type: "boolean",
      description: "A property that reflects the state.",
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
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Example = Template.bind({});

Example.args = {
  checked: false,
};
