
import ErrorArea from '@/components/erro';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
	title: "Erro 404 - Serviços Web",
	description: "Creative Digital Agency", 
};



const index = () => {
  return (
    <Wrapper>
      <ErrorArea />      
    </Wrapper>
  );
};

export default index;