import React from "react";

const Intro = () => {
  return (
    <div className="p-12  mobile:w-1/2 mobile:mx-auto sm-tablet:w-3/4 tablet:py-28 tablet:w-1/2">
      <p className="font-sans font-light sm-tablet:text-2xl laptop:text-3xl">
        At <span className="font-vujahday font-bold">Sapori D'Italia</span>, we
        pride ourselves on offering an unforgetable dining experience that
        embodies the essence of Italy. Nested in the{" "}
        <span className="font-vujahday font-bold">heart of Naples</span>, our
        restaurant is a haven for aficionados of authentic Italian cuisine.
      </p>
    </div>
  );
};

export default Intro;
