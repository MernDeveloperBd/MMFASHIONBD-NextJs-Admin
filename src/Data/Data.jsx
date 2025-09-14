import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { RiProductHuntLine } from "react-icons/ri";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

export const sidebarMenu = [
    {
        title:"Dashboard",
        href: "/",
        icon: <DashboardIcon size={16}/>
    },
    {
        title:"Category",
        href: "/category/list",
        icon: <CategoryIcon size={16}/>,
        items:[
            {
                title:"Category List",
                href: "/category/list",
            },
            {
                title:"Add Category",
                href: "/category/add",
            },
            {
                title:"Edit Category",
                href: "/category/edit",
            },
        ]
    },
    {
        title:"Products",
        href: "/products",
        icon: <RiProductHuntLine size={22}/>,
         items:[
            {
                title:"Products List",
                href: "/products",
            },
            {
                title:"Add Product",
                href: "/products/addProduct",
            },
            {
                title:"Edit Product",
                href: "/products/editProduct",
            },
        ]
    },
    {
        title:"Customers",
        href: "/customers/list",
        icon: <PeopleAltOutlinedIcon size={16}/>
    },
    {
        title:"Orders",
        href: "/orders",
        icon: <ShoppingCartOutlinedIcon size={16}/>
    },
    {
        title:"Mail",
        href: "/mail/list",
        icon: <EmailOutlinedIcon size={16}/>
    },
    {
        title:"Chat",
        href: "/chat/list",
        icon: <MarkChatUnreadOutlinedIcon size={16}/>
    },
    {
        title:"Log Out",
        href: "/login",
        icon: <LoginOutlinedIcon size={16}/>
    },
]

export const ordersData = [
{
    orderId:"212",
    customer:{
        avatar:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324269/products/ektootix1e8fhncgkove.jpg",
        name:"arifa akter",
        email:"marifa@misam.com"
    },
    items:85,
    price:"255",
    createdAt:{
        date:"August 25, 2024",
        time:"5:05 PM"
    },
    modifiedAt:{
        date:"August 25, 2025",
        time:"7:05 PM"
    },
    status:"canceled"

},
{
    orderId:"213",
    customer:{
        avatar:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752310789/products/n1sxxuheacwdpnzbmdfn.jpg",
        name:"arifa akter",
        email:"marifa@misam.com"
    },
    items:85,
    price:"255",
    createdAt:{
        date:"August 25, 2024",
        time:"5:05 PM"
    },
    modifiedAt:{
        date:"August 25, 2025",
        time:"7:05 PM"
    },
    status:"refunded"

},
{
    orderId:"214",
    customer:{
        avatar:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752310789/products/n1sxxuheacwdpnzbmdfn.jpg",
        name:"arifa akter",
        email:"marifa@misam.com"
    },
    items:85,
    price:"255",
    createdAt:{
        date:"August 25, 2024",
        time:"5:05 PM"
    },
    modifiedAt:{
        date:"August 25, 2025",
        time:"7:05 PM"
    },
    status:"pending"

},
{
    orderId:"211",
    customer:{
        avatar:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752310789/products/n1sxxuheacwdpnzbmdfn.jpg",
        name:"arifa akter",
        email:"marifa@misam.com"
    },
    items:85,
    price:"255",
    createdAt:{
        date:"August 25, 2024",
        time:"5:05 PM"
    },
    modifiedAt:{
        date:"August 25, 2025",
        time:"7:05 PM"
    },
    status:"canceled"

},
{
    orderId:"215",
    customer:{
        avatar:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752310789/products/n1sxxuheacwdpnzbmdfn.jpg",
        name:"arifa akter",
        email:"marifa@misam.com"
    },
    items:85,
    price:"255",
    createdAt:{
        date:"August 25, 2024",
        time:"5:05 PM"
    },
    modifiedAt:{
        date:"August 25, 2025",
        time:"7:05 PM"
    },
    status:"pending"

},
{
    orderId:"216",
    customer:{
        avatar:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752310789/products/n1sxxuheacwdpnzbmdfn.jpg",
        name:"arifa akter",
        email:"marifa@misam.com"
    },
    items:85,
    price:"255",
    createdAt:{
        date:"August 25, 2024",
        time:"5:05 PM"
    },
    modifiedAt:{
        date:"August 25, 2025",
        time:"7:05 PM"
    },
    status:"canceled"

},
]

export const productsData = [
    {
        
            id:"01",
            image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752338714/profile/d0evumcbn12vlftahfsg.jpg",
            title:"gergious borkha",
            cat:"Borkha",
            sku:"SB-2548",
            stockInCount:"19",
            price:"250",
            oldPrice:"290",
            resellingPrice:"200",
            ratings:{
                value:"5",
                reviews:19
            },
            status:"pending"
        
    },
    {
        
            id:"02",
            image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752338714/profile/d0evumcbn12vlftahfsg.jpg",
            title:"gergious borkha",
            cat:"Borkha",
            sku:"SB-2548",
            stockInCount:"30",
            price:"250",
            oldPrice:"290",
            resellingPrice:"200",
            ratings:{
                value:"3.5",
                reviews:11
            },
            status:"publish"
        
    },
    {
        
            id:"03",
            image:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752338714/profile/d0evumcbn12vlftahfsg.jpg",
            title:"gergious borkha",
            cat:"Borkha",
            sku:"SB-2548",
            stockInCount:"30",
            price:"250",
            oldPrice:"290",
            resellingPrice:"200",
            ratings:{
                value:"4.5",
                reviews:28
            },
            status:"draft"
        
    }
]