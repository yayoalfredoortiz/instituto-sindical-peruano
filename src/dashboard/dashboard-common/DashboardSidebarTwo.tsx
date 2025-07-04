"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

interface DataType {
  id: number;
  title: string;
  class_name?: string;
  sidebar_details: {
    id: number;
    link: string;
    icon: string;
    title: string;
  }[];
}

const sidebar_data: DataType[] = [
  {
    id: 1,
    title: "Bienvenida, Emily Hannah",
    sidebar_details: [
      {
        id: 1,
        link: "/student-dashboard",
        icon: "fas fa-home",
        title: "Panel de Control",
      },
      {
        id: 2,
        link: "/student-profile",
        icon: "skillgro-avatar",
        title: "Mi Perfil",
      },
    ],
  },
  {
    id: 2,
    title: "Aprendizaje",
    class_name: "mt-30",
    sidebar_details: [
      {
        id: 3,
        link: "/student-enrolled-courses",
        icon: "skillgro-book",
        title: "Cursos Inscritos",
      },
      // {
      //   id: 4,
      //   link: "/student-wishlist",
      //   icon: "skillgro-label",
      //   title: "Lista de Deseos",
      // },
      {
        id: 5,
        link: "/student-review",
        icon: "skillgro-book-2",
        title: "Mis Reseñas",
      },
      {
        id: 6,
        link: "/student-attempts",
        icon: "skillgro-question",
        title: "Mis Evaluaciones",
      },
      {
        id: 7,
        link: "/student-history",
        icon: "skillgro-satchel",
        title: "Historial de Compras",
      },
    ],
  },
  {
    id: 3,
    title: "Mis Casos Legales",
    class_name: "mt-30",
    sidebar_details: [
      {
        id: 1,
        link: "#",
        icon: "skillgro-settings",
        title: "Casos Legales",
      },
      {
        id: 2,
        link: "#",
        icon: "skillgro-logout",
        title: "Agenda",
      },
    ],
  },
  {
    id: 4,
    title: "Documentos Legales",
    class_name: "mt-30",
    sidebar_details: [
      {
        id: 1,
        link: "#",
        icon: "skillgro-settings",
        title: "Mis Documentos",
      },
      {
        id: 2,
        link: "#",
        icon: "skillgro-logout",
        title: "Historial de Compras",
      },
    ],
  },
  {
    id: 5,
    title: "Mi Cuenta",
    class_name: "mt-30",
    sidebar_details: [
      {
        id: 1,
        link: "/student-setting",
        icon: "skillgro-settings",
        title: "Configuración",
      },
      {
        id: 2,
        link: "/",
        icon: "skillgro-logout",
        title: "Cerrar Sesión",
      },
    ],
  },
];

const DashboardSidebarTwo = () => {
  const pathname = usePathname();

  return (
    <div className="col-lg-3">
      <div className="dashboard__sidebar-wrap">
        {sidebar_data.map((item) => (
          <React.Fragment key={item.id}>
            <div className={`dashboard__sidebar-title mb-20 ${item.class_name}`}>
              <h6 className="title">{item.title}</h6>
            </div>
            <nav className="dashboard__sidebar-menu">
              <ul className="list-wrap">
                {item.sidebar_details.map((list) => (
                  <li key={list.id} className={pathname === list.link ? 'active' : ''}>
                    <Link href={list.link}>
                      <i className={list.icon}></i>
                      {list.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default DashboardSidebarTwo;
