import React from 'react';
import HeaderListView from '../components/HeaderListView';

export default {
    title: "HeaderListView",
    component: HeaderListView,
}

const Template = (args) => <HeaderListView {...args} />


export const Header = Template.bind({})
Header.args = {
    text: "This is a header",
    height: "250px",
    marginBottom: "5%",
    backgroundColor: "green",
}

