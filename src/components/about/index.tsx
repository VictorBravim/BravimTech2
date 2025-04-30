 
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Cta2Area from '../homes/home/Cta2Area';
import AboutArea from '../homes/home/AboutArea';
import VideoArea from '../homes/home/CtaArea';
import WorkprocessArea from '../homes/home/WorkprocessArea';
import VideoAreaHomeOne from '../homes/home/VideoAreaHomeOne';
import TeamArea from '../homes/home/TeamArea';
import TestimonialArea from '../homes/home/TestimonialArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Aboutus = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Sobre Nós" subtitle="Sobre" />
      <AboutArea />
      <VideoArea style_2={true} />
      <WorkprocessArea />
      <VideoAreaHomeOne />
      <TeamArea />
      <TestimonialArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Aboutus;