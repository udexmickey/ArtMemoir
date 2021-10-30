

const DashboardFormDataInput = [
    // {
    //     // type:Image,
    //     title: 'Add image (Optional)',
    //     type:"file", 
    //     name:"send-image",
    //     id:"send-image",
    //     placeholder:'',
    //     className: 'send-image',
    //     key: 1,
    //     accept:"image/*"
    // },
    {
        // type:text,
        title: 'Title',
        type:"text", 
        name:"send-email",
        id:"send-email",
        className: 'send-email',
        // placeholder:'example@email.com',
        key: 2,
    },
]
const DashboardName = [
    {
        name: 'Send Email',
        link: '/sendmail',
    },
    {
        name: 'Add Blog post',
        link: '/blogpost',
    },
    {
        name: 'Edit Store data',
        link: '/uploadstore',
    },
    {
        name: 'Edit Gallery',
        link: '/editstore',
    },
]

export default DashboardFormDataInput;
export { DashboardName };