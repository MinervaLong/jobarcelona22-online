import PresentsGroup from '../components/PresentsGroup';

export default {
    title: "PresentsGroup",
    component: PresentsGroup,
    // The function indication asked in the challenge
    argTypes: {handleClick: {action: "Undefined function"}}, 
}

const Template = (args) => <PresentsGroup {...args} />


export const Group = Template.bind({})
Group.args = {
    border: "1px solid rgb(48, 13, 87)",
    borderRadius: "5px", 
    margin: "5%", 
    padding: "3%",
    width: "85%", 
}

