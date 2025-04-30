
import React from 'react';
import ServiceArea from './ServiceArea';
import ServiceAbout from './ServiceAbout';
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import PriceArea from '../homes/home/PriceArea';
import FooterOne from '@/layouts/footers/FooterOne';
import Cta2Area from '../homes/home/Cta2Area';

const Service = () => {
  return (
    <>
    <HeaderOne />
    <Breacrumb title="Nossos Serviços" subtitle="Serviços" />
    <ServiceArea />
    <ServiceAbout />
    <PriceArea style_2={true} />
    <Cta2Area />
    <FooterOne />      
    </>
  );
};

export default Service;