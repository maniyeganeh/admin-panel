import { Dashboard, PersonOutlineOutlined, Store, CreditCard, LocalShipping } from "@mui/icons-material"

export const centerItems = [
    {
        enTitle: "Dashboard",
        faTitle: "داشبورد",
        icon: <Dashboard className="icon" />
    }
]
export const listsItems = [
    {
        enTitle: "Users",
        faTitle: "کاربران",
        path: "users",
        icon: <PersonOutlineOutlined className="icon" />
    },
    {
        enTitle: "Products",
        faTitle: "محصولات",
        path: "products",
        icon: <Store className="icon" />
    },
    {
        enTitle: "Orders",
        faTitle: "سفارشات",
        icon: <CreditCard className="icon" />,
        path: "/",
    },
    {
        enTitle: "Delivery",
        faTitle: "ارسال",
        icon: <LocalShipping className="icon" />,
        path: "/",
    }
]