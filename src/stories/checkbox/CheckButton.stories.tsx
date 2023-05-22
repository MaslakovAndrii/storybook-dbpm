import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "components_new/checkButton";

export default {
  title: "ComponentsBPM/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      table: { category: "Content" },
      type: "string",
      description: "The value of this property will appear in the label.",
      defaultValue: "Label",
    },
    value: {
      table: { category: "Content" },
      description:
        "The value of the input when submitting the form if it is checked.",
      defaultValue: "",
    },
    checked: {
      table: { category: "State" },
      type: "boolean",
      description: "Specifies the initial state.",
      defaultValue: false,
    },
    indeterminate: {
      table: { category: "State" },
      type: "boolean",
      description:
        "A special state that means when all sub-items of this field (if any) are checked.",
      defaultValue: false,
    },
    id: {
      table: { category: "other" },
      type: "string",
      description: "Property must be unique for each toggle element.",
      defaultValue: "id",
    },
    name: {
      table: { category: "other" },
      type: "string",
      description:
        "The value will be assigned to this name when the submit happens (if the checkbox is checked).",
      defaultValue: "",
    },
    onChange: {
      table: { category: "Events" },
      action: ["onChange"],
      type: "function",
      description:
        "The property accepts a function that changes the state of the component.",
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
export const Example = Template.bind({});

Example.args = {
  checked: false,
};
