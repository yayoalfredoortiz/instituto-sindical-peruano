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
         )}
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
