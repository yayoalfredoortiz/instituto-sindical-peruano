"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import menu_data from "@/data/home-data/MenuData";
import icon_1 from "@/assets/img/others/mega_menu_img.jpg";
import { useBusinessServiceStore } from "@/zustand/stores/business-service.store";

const NavMenu = () => {
   const pathname = usePathname();
   const { data: services, getAll, loaded } = useBusinessServiceStore();

   useEffect(() => {
      if (!loaded) getAll(1, 20);
   }, [loaded, getAll]);

   const isActive = (href: string) => pathname === href;
   const isAnyChildActive = (hrefs: string[] = []) => hrefs.some((href) => pathname === href);

   const dynamicMenuData = menu_data.map((item) => {
      if (item.id === 4) {
         return {
            ...item,
            sub_menus: services.map((service) => ({
               link: `/business-services/${service.id}`,
               title: service.service_name,
            })),
         };
      }
      return item;
   });

   return (
      <ul className="navigation">
         {dynamicMenuData.map((menu) => {
            const subMenuLinks = menu.sub_menus?.map((sub_m) => sub_m.link).filter(Boolean) || [];
            const megaMenuLinks =
               menu.sub_menus?.flatMap((sub_m) => {
                  if ("mega_menus" in sub_m && Array.isArray(sub_m.mega_menus)) {
                     return sub_m.mega_menus.map((mega_m) => mega_m.link);
                  }
                  return [];
               }) || [];
            const homeSubMenuLinks = menu.home_sub_menu
               ?.flatMap((h_menu) => h_menu.menu_details.map((h_menu) => h_menu.link))
               .filter(Boolean) || [];

            const allLinks = [...subMenuLinks, ...megaMenuLinks, ...homeSubMenuLinks].filter(Boolean) as string[];

            return (
               <li
                  key={menu.id}
                  className={`menu-item ${menu.home_sub_menu || menu.sub_menus ? "menu-item-has-children" : "me-2"
                     } ${isAnyChildActive(allLinks) ? "active" : ""}`}
               >
                  <Link href={menu.link}>{menu.title}</Link>
                  {(menu.home_sub_menu || menu.sub_menus) && (
                     <ul className={`sub-menu ${menu.menu_class || ""}`}>
                        {menu.home_sub_menu ? (
                           <>
                              {menu.home_sub_menu.map((h_menu_details, i) => (
                                 <li key={i}>
                                    <ul className="list-wrap mega-sub-menu">
                                       {h_menu_details.menu_details.map((h_menu: any, index: any) => {
                                          const isHomeSubMenuActive = isActive(h_menu.link);
                                          return (
                                             <li key={index} className={isHomeSubMenuActive ? "active" : ""}>
                                                <Link href={h_menu.link}>
                                                   {h_menu.title}{" "}
                                                   <span className={h_menu.badge_class}>{h_menu.badge}</span>
                                                </Link>
                                             </li>
                                          );
                                       })}
                                    </ul>
                                 </li>
                              ))}

                              <li>
                                 <div className="mega-menu-img">
                                    <Link href="/courses">
                                       <Image src={icon_1} alt="img" />
                                    </Link>
                                 </div>
                              </li>
                           </>
                        ) : (
                           menu.sub_menus?.map((sub_m: any, index: any) => {
                              const isSubMenuActive = isActive(sub_m.link);
                              const isAnyMegaChildActive = Array.isArray(sub_m.mega_menus)
                                 ? isAnyChildActive(sub_m.mega_menus.map((m: any) => m.link).filter(Boolean))
                                 : false;

                              return (
                                 <li
                                    key={index}
                                    className={`${sub_m.dropdown ? "menu-item-has-children" : ""
                                       } ${isSubMenuActive || isAnyMegaChildActive ? "active" : ""}`}
                                 >
                                    <Link href={sub_m.link}>{sub_m.title}</Link>
                                    {Array.isArray(sub_m.mega_menus) && (
                                       <ul className="sub-menu">
                                          {sub_m.mega_menus.map((mega_m: any, i: number) => (
                                             <li key={i} className={isActive(mega_m.link) ? "active" : ""}>
                                                <Link href={mega_m.link}>{mega_m.title}</Link>
                                             </li>
                                          ))}
                                       </ul>
                                    )}
                                 </li>
                              );
                           })
                        )}
                     </ul>
                  )}
               </li>
            );
         })}
      </ul>
   );
};

export default NavMenu;
