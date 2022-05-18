import HeaderListView from '../components/HeaderListView';

export default {
    title: "HeaderListView",
    component: HeaderListView,
}

const Template = (args) => <HeaderListView {...args} />


export const Header = Template.bind({})
Header.args = {
    text: "This is a header",
    textAlign: "center",
    height: "270px",
    marginBottom: "5%",
    backgroundColor: "#B7DD9B",
}

