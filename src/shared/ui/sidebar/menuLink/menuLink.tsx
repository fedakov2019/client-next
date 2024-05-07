<<<<<<< HEAD
import clsx from "clsx";
import Link from "next/link";

import { usePathname } from "next/navigation";
type itemu = { path: string; icon: JSX.Element; title: string };

export const MenuLink = ({ item }: { item: itemu }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={clsx([
        "p-5 flex max-w-32 items-center gap-3 m-[5px] rounded-[10px] hover:bg-purple-500",
        pathname === item.path ? "active:bg-purple-400" : "",
      ])}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
=======
import clsx from 'clsx'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
type itemu={path:string,icon:JSX.Element,title:string}

export const MenuLink = ({item}:{item:itemu}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={clsx(["p-5 flex max-w-32 items-center gap-3 m-[5px] rounded-[10px] hover:bg-purple-500" ,(pathname === item.path)?"active:bg-purple-400":""])}>
      {item.icon}
      {item.title}
    </Link>
  )
}
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
