'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import icon_1 from '@/assets/img/icons/map_marker.svg';
import icon_2 from '@/assets/img/icons/envelope.svg';
import icon_3 from '@/assets/img/icons/phone.svg';
import { useOrganisationSettingStore } from '@/zustand/stores/organisation-setting.store';


const HeaderTopMain = ({ style }: any) => {
  const data = useOrganisationSettingStore((state) => state.data);
  const get = useOrganisationSettingStore((state) => state.get);

  useEffect(() => {
    if (!data) {
      get();
    }
  }, [data, get]);

  return (
    <div className="tg-header__top">
      <div className={`container ${style ? '' : 'custom-container'}`}>
        <div className="row">
          <div className="col-lg-6">
            <ul className="tg-header__top-info list-wrap">
              {/* <li>
                <Image src={icon_1} alt="Icon" />
                <span>{data?.company_address || 'Dirección no disponible'}</span>
              </li> */}
              <li>
                <Image src={icon_2} alt="Icon" />
                <Link href={`mailto:${data?.company_email || 'info@empresa.com'}`}>
                  {data?.company_email || 'info@empresa.com'}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="tg-header__top-right">
              <div className="tg-header__phone">
                <Image src={icon_3} alt="Icon" />
                Llámanos al:{' '}
                <Link href={`tel:${data?.company_phone || '000000000'}`}>
                  {data?.company_phone || '+51 000 000 000'}
                </Link>
              </div>
              <ul className="tg-header__top-social list-wrap">
                <li>Síguenos en :</li>
                {data?.facebook_url && (
                  <li>
                    <Link href={data.facebook_url} target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                )}
                {data?.twitter_url && (
                  <li>
                    <Link href={data.twitter_url} target="_blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                )}
                {data?.youtube_url && (
                  <li>
                    <Link href={data.youtube_url} target="_blank">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                )}
                {data?.tiktok_url && (
                  <li>
                    <Link href={data.tiktok_url} target="_blank">
                      <i className="fab fa-tiktok"></i>
                    </Link>
                  </li>
                )}
                {data?.spotify_url && (
                  <li>
                    <Link href={data.spotify_url} target="_blank">
                      <i className="fab fa-spotify"></i>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopMain;
