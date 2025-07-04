"use client";

import { useEffect } from "react";
import Link from "next/link";
import BtnArrow from "@/svg/BtnArrow"; 
import { useBusinessServiceStore } from "@/zustand/stores/business-service.store";

const ServiceSidebar = ({ style_1 }: { style_1?: boolean }) => {
  return (
    <div className="col-xl-3 col-lg-4">
      <aside className={`blog-sidebar ${style_1 ? "blog-sidebar-two" : ""}`}>
        <Services />
        <div className="tg-button-wrap">
          <Link href="/appointment" className="btn-block btn btn-one arrow-btn mx-auto">
            Agendar una Cita <BtnArrow />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default ServiceSidebar;

const Services = () => { 
  const services = useBusinessServiceStore((s) => s.data); 

  return (
    <div className="blog-widget">
      <h4 className="widget-title">Servicios</h4>
      <div className="shop-cat-list">
        <ul className="list-wrap">
          {services.map((service) => (
            <li key={service.id}>
              <Link href={`/business-services/${service.id}`}>
                <i className="flaticon-angle-right"></i>
                {service.service_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
