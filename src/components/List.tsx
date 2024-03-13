import { isParentActive } from "@/lib/menu-active";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const List = () => {
  const path = usePathname();
  const navigation = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Services",
      url: "/services",
    },
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "Blogs",
      url: "/blogs",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];
  return (
    <ul className="site-menu-main flex gap-4">
      {navigation?.map((item, i) => (
        <li key={i} className="nav-item nav-item-has-children">
          <Link
            href={item.url}
            className={`text-white ${path === item.url ? "ui-nav-active" : ""}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
