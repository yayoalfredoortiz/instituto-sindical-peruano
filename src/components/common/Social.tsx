import Link from "next/link";
import InjectableSvg from "@/hooks/InjectableSvg";
import { OrganisationSetting } from "@/zustand/interfaces/organisation-setting.interface";

interface SocialProps {
   data?: OrganisationSetting | null;
}

const Social = ({ data }: SocialProps) => {
   return (
      <>
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
         {/* {data?.facebook_url && (
            <li>
               <Link href={data.facebook_url} target="_blank">
                  <InjectableSvg src="/assets/img/icons/facebook.svg" alt="Facebook" className="injectable" />
               </Link>
            </li>
         )}
         {data?.twitter_url && (
            <li>
               <Link href={data.twitter_url} target="_blank">
                  <InjectableSvg src="/assets/img/icons/twitter.svg" alt="Twitter" className="injectable" />
               </Link>
            </li>
         )}
         {data?.instagram_url && (
            <li>
               <Link href={data.instagram_url} target="_blank">
                  <InjectableSvg src="/assets/img/icons/instagram.svg" alt="Instagram" className="injectable" />
               </Link>
            </li>
         )}
         {data?.linkedin_url && (
            <li>
               <Link href={data.linkedin_url} target="_blank">
                  <InjectableSvg src="/assets/img/icons/youtube.svg" alt="img" className="injectable" />
               </Link>
            </li>
         )} */}
         {/* {data?.company_email && (
        <li>
          <Link href={`mailto:${data.company_email}`} target="_blank">
            <InjectableSvg src="/assets/img/icons/mail.svg" alt="Mail" className="injectable" />
          </Link>
        </li>
      )} */}
      </>
   );
};

export default Social;
