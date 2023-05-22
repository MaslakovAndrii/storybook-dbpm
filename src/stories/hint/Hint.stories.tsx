import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hint } from "components_new/hint";
import { DefaultPositionHint } from "components_new/hint/utils";
import styles from "./storyHint.module.scss";

export default {
  title: "ComponentsBPM/Hint",
  component: Hint,
  argTypes: {
    children: {
      table: { category: "Content" },
      description:
        "The element that is wrapped by the 'Hint' component. Hovering over it will display hint.",
      defaultValue: <div>Hint</div>,
    },
    content: {
      table: { category: "Content" },
      description: "What will be displayed in hint.",
      defaultValue: <div>Label</div>,
    },
    defaultPosition: {
      table: { category: "Settings" },
      type: "string",
      description:
        "The position which is given priority when the tooltip is displayed. In the event that she does not have enough space, she will be displayed on the side with the most space..",
      defaultValue: DefaultPositionHint.Bottom,
      control: {
        type: "radio",
        options: DefaultPositionHint,
      },
    },
    offsetValue: {
      table: { category: "Settings" },
      type: "number",
      description: "Indent from element to hint.",
      defaultValue: 5,
    },
  },
} as ComponentMeta<typeof Hint>;

const Template: ComponentStory<typeof Hint> = (args) => (
  <div className={styles.container}>
    <Hint {...args}>
      <div>hint</div>
    </Hint>
  </div>
);

export const Example = Template.bind({});
