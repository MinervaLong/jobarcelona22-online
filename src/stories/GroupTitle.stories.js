import GroupTitle from '../components/GroupTitle';

export default {
    title: "GroupTitle",
    component: GroupTitle,
}

const Template = (args) => <GroupTitle {...args} />


export const Title = Template.bind({})
Title.args = {
    label: "This is a heading",
    fontWeight: "500",
    margin: '0',
}