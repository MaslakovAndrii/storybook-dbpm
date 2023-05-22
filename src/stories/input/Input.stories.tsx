import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "components_new/input";
import { VariantInput, SizeInput } from "components_new/input/utils";
import { iconsInfo } from "components_new/iconsList/iconInfo";

interface IconsMap {
  [icon: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const iconList = [...Object.keys(iconsInfo)];
const iconsMap = iconList.reduce((acc: IconsMap, key: string) => {
  const value = iconsInfo[key].icon;
  acc[key] = value;
  return acc;
}, {});

export default {
  title: "ComponentsBPM/Input",
  component: Input,
  argTypes: {
    variant: {
      table: { category: "Appearance" },
      type: "string",
      description: "The property defines a variant of the view.",
      control: {
        type: "radio",
      },
    },
    size: {
      table: { category: "Appearance" },
      type: "string",
      description: "The property determines the size of the element.",
      control: {
        type: "radio",
      },
    },
    value: {
      table: { category: "Content" },
      description:
        "This property can be passed the initial value of the component.",
    },
    placeholder: {
      table: { category: "Content" },
      type: "string",
      description:
        "Property that specifies the placeholder or label (if available).",
      defaultValue: "Find",
    },
    icon: {
      table: { category: "Content" },
      description: "The property accepts a JSX element.",
      if: { arg: "variant", neq: VariantInput.Search },
      control: {
        type: "select",
        options: iconList,
      },
    },
    isError: {
      table: { category: "State" },
      type: "boolean",
      description: "The property is responsible for the error state.",
      defaultValue: false,
      if: { arg: "variant", neq: VariantInput.Search },
    },
    errorText: {
      table: { category: "Content" },
      type: "string",
      description:
        "The property accepts the text that will be displayed in case of an error.",
      defaultValue: "error",
      if: { arg: "variant", neq: VariantInput.Search },
    },
    disabled: {
      table: { category: "State" },
      type: "boolean",
      description:
        "The property responsible for blocking interaction with the element.",
      defaultValue: false,
      if: { arg: "variant", neq: VariantInput.Search },
    },
    readonly: {
      table: { category: "State" },
      type: "boolean",
      description: "The property makes the element read-only.",
      defaultValue: false,
      if: { arg: "variant", neq: VariantInput.Search },
    },
    type: {
      table: { category: "State" },
      type: "string",
      description:
        "This property determines the type of data that the component accepts.",
      defaultValue: "string",
    },
    onChange: {
      table: { category: "Events" },
      type: "function",
      description: "",
    },
    maxWidth: {
      table: { category: "Other" },
      type: "string",
      description:
        "This property sets the maximum width of the input without having to wrap it in a container. Just pass the value as a string, also specifying the units.",
      defaultValue: "100%",
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const icon = args.icon ? iconsMap[args.icon] : null;
  return <Input {...args} />;
};

export const Primary = Template.bind({});

Primary.argTypes = {
  variant: {
    defaultValue: VariantInput.Primary,
    options: [VariantInput.Primary],
  },
  size: {
    defaultValue: SizeInput.primaryL,
    options: [SizeInput.primaryL, SizeInput.primaryS],
  },
};

Primary.args = {
  variant: VariantInput.Primary,
  size: SizeInput.primaryL,
  placeholder: "Name",
  value: "input",
};

export const Table = Template.bind({});

Table.argTypes = {
  variant: {
    defaultValue: VariantInput.Table,
    options: [VariantInput.Table],
  },
  size: {
    defaultValue: "",
    options: [],
  },
};

Table.args = {
  variant: VariantInput.Table,
  placeholder: "Name",
  value: "input",
};

export const Search = Template.bind({});

Search.argTypes = {
  variant: {
    defaultValue: VariantInput.Search,
    options: [VariantInput.Search],
  },
  size: {
    defaultValue: SizeInput.searchXL,
    options: [
      SizeInput.searchXL,
      SizeInput.searchL,
      SizeInput.searchM,
      SizeInput.searchS,
    ],
  },
};

Search.args = {
  variant: VariantInput.Search,
  size: SizeInput.searchXL,
  icon: "SearchIcon",
  value: "",
};
