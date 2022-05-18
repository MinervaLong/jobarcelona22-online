import React from 'react';
import Tag from '../../components/Tag'

export default {
    title: "Tag",
    component: Tag,
    argTypes: {handleClick: {action: "Possible function to filter by tag"}},
}

const Template = (args) => <Tag {...args} />


export const DefTag = Template.bind({})
DefTag.args = {
    backgrounColor: "#6BD12F",
    color: "#FFF",
    label: "Press me",
    size: "sm",
}


