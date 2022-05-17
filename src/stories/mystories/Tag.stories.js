import React from 'react';
import ButtonTag from '../../components/ButtonTag'

export default {
    title: "Tag",
    component: ButtonTag,
    argTypes: {handleClick: {action: "Possible function to filter by tag"}},
}

const Template = (args) => <ButtonTag {...args} />


export const SmallTag = Template.bind({})
SmallTag.args = {
    backgrounColor: "#57922A",
    color: "#FFF",
    label: "",
    size: "sm",
}

export const MediumTag = Template.bind({})
MediumTag.args = {
    backgrounColor: "#57922A",
    color: "#FFF",
    label: "",
    size: "md",
}

export const LargeTag = Template.bind({})
LargeTag.args = {
    backgrounColor: "#57922A",
    color: "#FFF",
    label: "",
    size: "lg",
}
