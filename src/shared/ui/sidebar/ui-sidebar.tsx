import Image from "next/image";
<<<<<<< HEAD
import { MenuLink } from "./menuLink/menuLink";
=======
import {MenuLink} from "./menuLink/menuLink";
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
//import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const Sidebar = () => {
<<<<<<< HEAD
  // const { user } = await auth();
=======
 // const { user } = await auth();
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
  return (
    <div className="sticky top-10 ">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src={"/avatar.jpg"}
          alt=""
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-[500]">{"Aleks"}</span>
          <span className="text-xs text-slate-700">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
<<<<<<< HEAD
            <span
              className="
=======
            <span className="
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
         text-slate-700
             font-bold
             text-xs
             m-2
<<<<<<< HEAD
            "
            >
              {cat.title}
            </span>
=======
            ">{cat.title}</span>
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form>
        <button className="">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
