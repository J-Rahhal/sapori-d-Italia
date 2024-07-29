import React from "react";

const Portions = ({ img, itemList }) => {
  return (
    <>
      <div className="md-tablet:w-1/2 md-tablet:ml-16 desktop:w-1/3">
        <img
          src={img}
          alt="a plate of pasta"
          className="tablet:object-contain w-full h-full"
        />
      </div>
      <div className="md-tablet:w-1/2 md-tablet:pr-28 font-playwrite flex xs-mobile:flex-col xs-mobile:gap-4 xs-mobile:text-sm sm-tablet:text-lg sm-tablet:my-auto md-tablet:gap-8 laptop:text-xl desktop:gap-16">
        {itemList.map((item) => {
          return (
            <div
              className="flex items-center gap-4 border-b border-yellow-600 py-2 justify-between"
              key={item.id}
            >
              {item.id === 3 ? (
                <>
                  <p className="text-yellow-600">{item.name}</p>
                  <p className="text-yellow-700">{item.price}</p>
                </>
              ) : (
                <>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portions;
