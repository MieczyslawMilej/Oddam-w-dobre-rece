import React from "react";

export default function HomeThreeColumns() {
  return (
      <section className="columns">
        <div className="wrapper">
          <div className="three-box">
            <p className="three-number">10</p>
            <p className="title">oddanych worków</p>
            <p  className="text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="three-box">
            <p className="three-number">5 </p>
            <p className="title">wspartych organizacji</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="three-box">
            <p className="three-number">7</p>
            <p className="title">zorganizowanych zbiórek</p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </section>
  );
}
