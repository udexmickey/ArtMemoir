

const DashboardFormDataInput = [
    {
        title: 'Title',
        type:"text", 
        name:"send-email",
        id:"send-email",
        className: 'send-email',
        // placeholder:'John Doe',
        key: 2,
    },
]

const DashboardName = [
    {
        id: '1',
        name: 'Send Email',
        link: '/sendmail',
    },
    {
        id: '2',
        name: 'Add Blog post',
        link: '/blogpost',
    },
    {
        id: '3',
        name: 'Edit Store data',
        link: '/uploadstore',
    },
    {
        id: '4',
        name: 'Edit Gallery',
        link: '/editstore',
    },
]

export default DashboardFormDataInput;
export { DashboardName };