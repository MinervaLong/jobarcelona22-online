import React from 'react';
import GroupDesc from '../components/GroupDescription';

export default {
    title: "GroupDesc",
    component: GroupDesc,
}

const Template = (args) => <GroupDesc {...args} />


export const Desc = Template.bind({})
Desc.args = {
    text: "This is a description",
    fontSize: "12pt",
    marginTop: '5%',
    marginBottom: "9%",
}