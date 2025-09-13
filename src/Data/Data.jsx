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
        href: "/products/list",
        icon: <RiProductHuntLine size={16}/>,
         items:[
            {
                title:"Products List",
                href: "/product/list",
            },
            {
                title:"Add Product",
                href: "/category/add",
            },
            {
                title:"Edit Product",
                href: "/Product/edit",
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
        href: "/orders/list",
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