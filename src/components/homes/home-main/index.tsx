'use client';

import { useEffect, useState } from 'react';

import Banner from './Banner';
import Features from './Features';
import Courses from './Courses';
import Newsletter from './Newsletter';
import HeaderMain from '@/layouts/headers/HeaderMain';
import FooterMain from '@/layouts/footers/FooterMain';
import WhatsappButton from '@/components/common/WhatsappButton';
import BrandOne from '@/components/common/brands/BrandOne';
import Faq from './Faq';
import TestimonialMain from './TestimonialMain';
import ChooseMain from './ChooseMain';
import OurServices from './OurServices';
import LegalFormats from './LegalFormats';
import CaseTracking from './CaseTracking';
import AboutUsMain from './AboutUs';
import { useBannerStore } from '@/zustand/stores/banner.store';
import { useBusinessServiceStore } from '@/zustand/stores/business-service.store';
import { useReviewStore } from '@/zustand/stores/review.store';
import { useWhyChooseUsStore } from '@/zustand/stores/why-choose-us.store';
import { useFaqStore } from '@/zustand/stores/faq.store';
import { useOrganisationSettingStore } from '@/zustand/stores/organisation-setting.store';
import { BlinkBlur } from 'react-loading-indicators';
import { useArticleStore } from '@/zustand/stores/article.store';
import Blog from './Blog';
import Loading from '@/components/common/Loading';
import { useCourseStore } from '@/zustand/stores/course.store';

const HomeMain = () => {

   const [isClientReady, setIsClientReady] = useState(false);

   // 📰 Article Store
   const getAllArticles = useArticleStore((state) => state.getAll);
   const loadingArticles = useArticleStore((state) => state.loading);
   const loadedArticles = useArticleStore((state) => state.loaded);

   // 📢 Banner Store
   const getAllBanners = useBannerStore((state) => state.getAll);
   const loadingBanners = useBannerStore((state) => state.loading);
   const loadedBanners = useBannerStore((state) => state.loaded);

   // 🛠️ Business Service Store
   const getAllServices = useBusinessServiceStore((state) => state.getAll);
   const loadingServices = useBusinessServiceStore((state) => state.loading);
   const loadedServices = useBusinessServiceStore((state) => state.loaded);

   // ⭐ Review Store
   const getAllReviews = useReviewStore((state) => state.getAll);
   const loadingReviews = useReviewStore((state) => state.loading);
   const loadedReviews = useReviewStore((state) => state.loaded);

   // 💡 Why Choose Us Store
   const getAllWhyChooseUs = useWhyChooseUsStore((state) => state.getAll);
   const loadingWhyChooseUs = useWhyChooseUsStore((state) => state.loading);
   const loadedWhyChooseUs = useWhyChooseUsStore((state) => state.loaded);

   // ❓ FAQ Store
   const getAllFaqs = useFaqStore((state) => state.getAll);
   const loadingFaqs = useFaqStore((state) => state.loading);
   const loadedFaqs = useFaqStore((state) => state.loaded);

   // 🏢 Organisation Setting Store
   const getOrganisation = useOrganisationSettingStore((state) => state.get);
   const loadingOrganisation = useOrganisationSettingStore((state) => state.loading);
   const organisationData = useOrganisationSettingStore((state) => state.data);

   const getAllCourses = useCourseStore((state) => state.getAll);
   const loadingCourses = useCourseStore((state) => state.loading);
   const loadedCourses = useCourseStore((state) => state.loaded);

   useEffect(() => {
      if (!loadedArticles) getAllArticles(1, 10);
      if (!loadingCourses) getAllCourses(1, 10);
      if (!loadedBanners) getAllBanners(1, 10);
      if (!loadedServices) getAllServices(1, 10);
      if (!loadedReviews) getAllReviews(1, 7);
      if (!loadedWhyChooseUs) getAllWhyChooseUs(1, 10);
      if (!loadedFaqs) getAllFaqs(1, 20);
      if (!organisationData) getOrganisation();
      // ⏳ Espera al menos un ciclo para que los stores actualicen su `loading`
      setTimeout(() => setIsClientReady(true), 0);
   }, []);

   const isLoading =
      !isClientReady || loadingCourses ||loadingBanners || loadingServices || loadingReviews || loadingWhyChooseUs || loadingOrganisation;

   if (isLoading) {
      return <Loading />;
   }

   return (
      <>
         <HeaderMain />
         <main className="main-area fix">
            <Banner />
            <Features />
            <OurServices />
            <CaseTracking />
            <Courses />
            <LegalFormats />
            <ChooseMain />
            <BrandOne />
            <TestimonialMain />
            <AboutUsMain />
            <Faq />
            <Blog />
            <Newsletter />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   );
};

export default HomeMain;
