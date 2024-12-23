import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div className="about" ref={ref}>
      <div className="head">
        <h1>
          <span id="span-1">About</span> Us
        </h1>
        <p>
          "Welcome to{" "}
          <span id="span-1">
            Stride <span id="span-2">Style</span>
          </span>
          , where every step tells a story."
        </p>
      </div>
      <div className="obj">
        <div className="sub-obj">
          <h3>
            <span id="span-1">Who</span> We Are
          </h3>
          <p>
            Founded with a passion for style and a commitment to quality, Stride
            Style is dedicated to providing footwear that combines fashion,
            comfort, and durability. Our team is driven by the vision to create
            shoes that not only look good but feel great—because we understand
            that style starts with comfort.
          </p>
        </div>
        <div className="sub-obj">
          <h3>
            <span id="span-1">What</span> We Offer
          </h3>
          <p>
            From casual sneakers to elegant heels, rugged boots to sleek
            loafers, our collection is thoughtfully designed to suit every
            stride and style. Each pair is crafted using premium materials, with
            a focus on superior craftsmanship and innovative designs that keep
            up with your dynamic lifestyle.
          </p>
        </div>
        <div className="sub-obj">
          <h3>
            <span id="span-1">Our</span> Mission
          </h3>
          <p>
            To empower every individual to walk with confidence and express
            their unique style through high-quality footwear.
          </p>
        </div>
      </div>
      <div className="footer">
        {/* <h1>Step Into Your <span id="span-1">Style</span></h1> */}
        <p>
          "Let’s walk this journey together, one{" "}
          <span id="span-1">stylish</span> step at a time."
        </p>
      </div>
    </div>
  );
});

export default About;
