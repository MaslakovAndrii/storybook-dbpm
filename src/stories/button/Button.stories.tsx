import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "components_new/button";
import { SizeButton, VariantButton } from "components_new/button/utils";
import { iconsInfo } from "components_new/iconsList/iconInfo";

const iconList = [...Object.keys(iconsInfo)];
const iconsMap = iconList.reduce((acc: any, key) => {
  const value = iconsInfo[key].icon;
  acc[key] = value;
  return acc;
}, {});

export default {
  title: "ComponentsBPM/Button",
  component: Button,
  argTypes: {
    variant: {
      table: { category: "Appearance" },
      type: "string",
      description: "Button appearance option.",
      defaultValue: VariantButton.Primary,
      control: {
        type: "radio",
        options: VariantButton,
      },
    },
    size: {
      table: { category: "Appearance" },
      type: "string",
      description: "Possible button sizes.",
      defaultValue: SizeButton.XL,

      control: {
        type: "radio",
        options: SizeButton,
      },
    },
    children: {
      table: { category: "Content" },
      type: "string",
      description: "Can be a string or accept any JSX element.",
      defaultValue: "Button",
    },
    icon: {
      table: { category: "Content" },
      description:
        "Property accepts a JSX element. Import example: import { ReactComponent as NameElement } from 'assets/svg/namesSvgFile.svg'",
      control: {
        type: "select",
        options: iconList,
      },
    },
    disabled: {
      table: { category: "State" },
      type: "boolean",
      description:
        "The property responsible for blocking interaction with the element.",
      defaultValue: false,
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    styles: {
      table: { category: "Appearance" },
      description:
        "A property that takes an object of styles and applies them to an element.",
      defaultValue: {},
    },
    onClick: { table: { category: "Events" }, action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const icon = args.icon ? iconsMap[args.icon] : null;
  return <Button {...args} {...icon} />;
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
  variant: VariantButton.Primary,
  size: SizeButton.XL,
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Button",
  variant: VariantButton.Secondary,
  size: SizeButton.XL,
};

export const Module = Template.bind({});

Module.args = {
  children: "Button",
  variant: VariantButton.Module,
  size: SizeButton.XL,
};

export const Back = Template.bind({});

Back.args = {
  children: "Button",
  variant: VariantButton.Back,
  size: SizeButton.XL,
};
