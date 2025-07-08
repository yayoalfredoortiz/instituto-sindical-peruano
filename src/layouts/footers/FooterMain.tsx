'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Social from '@/components/common/Social';
import { useOrganisationSettingStore } from '@/zustand/stores/organisation-setting.store';
 

const FooterMain = () => {
  const data = useOrganisationSettingStore((state) => state.data); 

  return (
    <div className="container-fluid footer__area text-white pt-5 px-sm-3 px-md-5" style={{ marginTop: '90px' }}>
      <div className="row mt-5">
        {/* <div className="col-lg-4">
          <div className="d-flex justify-content-lg-center p-4 rounded-2 mb-2" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
            <div className="ms-3">
              <h5 className="text-white">Nos localizamos en</h5>
              <p className="m-0 text-gray">{data?.company_address || 'Dirección no disponible'}</p>
            </div>
          </div>
        </div> */}
        <div className="col-lg-6">
          <div className="d-flex justify-content-lg-center p-4 rounded-2 mb-2" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <i className="fa fa-2x fa-envelope-open text-secondary"></i>
            <div className="ms-3">
              <h5 className="text-white">Envía un correo a</h5>
              <p className="m-0 text-gray">
                <Link className='text-gray' href={`mailto:${data?.company_email || 'info@example.com'}`}>
                  {data?.company_email || 'info@example.com'}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-lg-center p-4 rounded-2 mb-2" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            <i className="fa fa-2x fa-phone-alt text-secondary"></i>
            <div className="ms-3">
              <h5 className="text-white">Llámanos</h5>
              <p className="m-0 text-gray">
                <Link className='text-gray' href={`tel:${data?.company_phone || '+0123456789'}`}>
                  {data?.company_phone || '+012 345 6789'}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-lg-6 col-md-6 mb-5">
          <div className="footer__widget">
            <div className="logo mb-4">
              <Link href="/">
                <Image src="/assets/img/logo/logo.png" alt="Logo principal" width={85} height={73} />
              </Link>
            </div>
            <div className="footer__social-wrap">
              <h6 className="title">Síguenos en nuestras redes sociales :</h6>
            </div>
            <ul className="list-wrap footer__social footer__social-two">
              <Social data={data}/>
            </ul>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 mb-5">
          <div className="footer__widget">
            <h4 className="footer__widget-title">Noticias</h4>
            <div className="footer__newsletter">
              <p>Recibe las últimas noticias directamente en tu correo</p>
              <form onSubmit={(e) => e.preventDefault()} className="footer__newsletter-form">
                <input type="email" placeholder="Escribe tu correo electrónico" />
                <button type="submit">Suscríbete</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-4 mt-5 mx-0" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
        <div className="col-md-6 text-md-left mb-3 mb-md-0">
          <p className="m-0 text-white">
            &copy; <Link href="#" className="font-weight-bold text-white">Instituto Sindical Peruano</Link>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
