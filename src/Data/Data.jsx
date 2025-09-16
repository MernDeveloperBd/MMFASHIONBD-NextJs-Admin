import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { RiProductHuntLine } from "react-icons/ri";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { FaRegUser } from 'react-icons/fa6';

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
        href: "/chat",
        icon: <MarkChatUnreadOutlinedIcon size={16}/>
    },
     {
        title:"Authentication",
        href: "/",
        icon: <FaRegUser size={22}/>,
         items:[
            {
                title:"Sign In",
                href: "/login",
            },
            {
                title:"Sign Up",
                href: "/sign-up",
            },
            {
                title:"Forgot password",
                href: "/forgot-password",
            },
        ]
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

export const chatUserData = [
    {
        name:"misam mehzabin",
        msg:"hi, how are you?",
        time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324269/products/ektootix1e8fhncgkove.jpg"
    },
    {
        name:"Marifa akter",
        msg:"hi, I am fine.",
        time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752242429/categorys/vrw6oq3n0ozb30iq3xtm.jpg"
    },
    {
        name:"Khushboo",
        msg:"hi, how are you?",
         time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752310789/products/n1sxxuheacwdpnzbmdfn.jpg"
    },
    {
        name:"Fatiha akter",
        msg:"hi, how are you?",
         time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324269/products/ektootix1e8fhncgkove.jpg"
    },
    {
        name:"Fatiha akter",
        msg:"hi, how are you?",
         time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324269/products/ektootix1e8fhncgkove.jpg"
    },
    {
        name:"Fatiha akter",
        msg:"hi, how are you?",
         time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324269/products/ektootix1e8fhncgkove.jpg"
    },
    {
        name:"Fatiha akter",
        msg:"hi, how are you?",
         time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324559/products/vpvgwrulkvwwu9zcvefx.jpg"
    },
    {
        name:"Fatiha akter",
        msg:"hi, how are you?",
         time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"
    },
    {
        name:"Fatiha akter",
        msg:"hi, how are you?",
         time:"10:30 AM",
        img:"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752324269/products/ektootix1e8fhncgkove.jpg"
    },
]