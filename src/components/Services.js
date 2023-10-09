import React from 'react'
import Title from './partialComponents/Title';
import ServicesTemplate from './partialComponents/ServicesTemplate';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <ServicesTemplate/>
    </section>
  );
}

export default Services