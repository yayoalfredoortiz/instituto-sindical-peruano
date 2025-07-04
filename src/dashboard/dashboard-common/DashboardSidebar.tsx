"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

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
}[];

const sidebar_data: DataType[] = [
  {
    id: 1,
    title: "Bienvenido, José Sandoval",
    sidebar_details: [
      {
        id: 1,
        link: "/instructor-dashboard",
        icon: "fas fa-home",
        title: "Panel de Instructor",
      },
      {
        id: 2,
        link: "/instructor-profile",
        icon: "skillgro-avatar",
        title: "Mi Perfil",
      },
      // {
      //   id: 3,
      //   link: "/instructor-enrolled-courses",
      //   icon: "skillgro-book",
      //   title: "Cursos Inscritos",
      // },
      // {
      //   id: 4,
      //   link: "/instructor-wishlist",
      //   icon: "skillgro-label",
      //   title: "Lista de Deseos",
      // },
      // {
      //   id: 5,
      //   link: "/instructor-review",
      //   icon: "skillgro-book-2",
      //   title: "Reseñas",
      // },
      // {
      //   id: 6,
      //   link: "/instructor-attempts",
      //   icon: "skillgro-question",
      //   title: "Evaluaciones",
      // },
      // {
      //   id: 7,
      //   link: "/instructor-history",
      //   icon: "skillgro-satchel",
      //   title: "Historial de Compras",
      // },
    ],
  },
  {
    id: 2,
    title: "Abogado",
    class_name: "mt-40",
    sidebar_details: [
      {
        id: 1,
        link: "#",
        icon: "skillgro-satchel",
        title: "Casos Asignados",
      }, 
      {
        id: 2,
        link: "#",
        icon: "skillgro-satchel",
        title: "Tareas",
      }, 
      {
        id: 3,
        link: "#",
        icon: "skillgro-satchel",
        title: "Agenda",
      }, 
    ],
  },
  {
    id: 3,
    title: "Instructor",
    class_name: "mt-40",
    sidebar_details: [
      {
        id: 1,
        link: "/instructor-courses",
        icon: "skillgro-video-tutorial",
        title: "Mis Cursos",
      },
      {
        id: 2,
        link: "/instructor-review",
        icon: "skillgro-book-2",
        title: "Reseñas",
      },
      // {
      //   id: 2,
      //   link: "/instructor-announcement",
      //   icon: "skillgro-marketing",
      //   title: "Anuncios",
      // },
      // {
      //   id: 3,
      //   link: "/instructor-quiz",
      //   icon: "skillgro-chat",
      //   title: "Intentos de Quiz",
      // },
      // {
      //   id: 4,
      //   link: "/instructor-assignment",
      //   icon: "skillgro-list",
      //   title: "Tareas Asignadas",
      // },
      {
        id: 4,
        link: "/instructor-comments",
        icon: "skillgro-list",
        title: "Foro y Comentarios",
      },
    ],
  },
  {
    id: 4,
    title: "Estudiante",
    class_name: "mt-40",
    sidebar_details: [
       {
        id: 1,
        link: "/instructor-enrolled-courses",
        icon: "skillgro-book",
        title: "Cursos Inscritos",
      },
      {
        id: 2,
        link: "/instructor-attempts",
        icon: "skillgro-question",
        title: "Evaluaciones",
      },
      {
        id: 3,
        link: "/instructor-history",
        icon: "skillgro-satchel",
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
        link: "/instructor-setting",
        icon: "skillgro-settings",
        title: "Configuración",
      },
      {
        id: 2,
        link: "/",
        icon: "skillgro-logout",
        title: "Cerrar sesión",
      },
    ],
  },
];

const DashboardSidebar = () => {
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
  );
};

export default DashboardSidebar;
