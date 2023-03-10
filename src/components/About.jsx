import React from "react";
import { useInView } from 'react-intersection-observer';

function About() {

    const [ ref2, inView2 ] = useInView({
        /* Optional options */
        threshold: 0,
      });

    return (
        <div id="about" ref={ref2} className={`bg-img-about hidden-animation-about ${inView2 ? "show-about" : "" }`}>
        <div className="container custom-container-about">
            <h1><strong>About Us</strong></h1>
            <br/>
            <p>PT. Mekada Abadi is a family-owned corporation with a history spanning three generations. Established in 1950, the company began as a small drug store called "Toko Obat Bali" and has since grown into a nationwide pharmaceutical distributor. With more than 30 years of experience in sales and marketing in the Indonesian healthcare industry, PT. Mekada Abadi has built strong partnerships within the Indonesian pharmaceutical distribution network.</p>
            <p>At PT Mekada Abadi, we are committed to providing affordable medications and efficient service to all members of the community.</p>
        </div>
        </div>
    )
}

export default About;