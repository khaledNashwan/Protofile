import React from 'react'
import FormMap from '../components/Map/FormMap';
import Map from '../components/Map/Map';
import SectionHeader from '../components/SectionHeader';
import Footer from '../components/Footer'



const Contact = () => {
  return (
      
      <section id="contact">
        <SectionHeader sectionHeader="Contact" />
        <main className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">       
            <Map />
          <FormMap />            
          </div>
      </main>
      <Footer />
      </section>
    );
};

export default Contact;