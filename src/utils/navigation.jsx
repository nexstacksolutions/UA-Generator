import { MdHomeFilled } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdError } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
  {
    label: "Home",
    href: "#",
    icon: <MdHomeFilled />,
  },
  {
    label: "About",
    href: "#about",
    icon: <MdError />,
  },
  {
    label: "Contact",
    href: "#home",
    icon: <IoMdContact />,
  },
];

export const mobileNavigation = [
  ...navigation,
  {
    label: "search",
    href: "#search",
    icon: <IoSearchOutline />,
  },
];
