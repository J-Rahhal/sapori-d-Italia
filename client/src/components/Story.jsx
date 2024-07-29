import React from "react";
import { Chrono } from "react-chrono";

const Story = () => {
  const items = [
    {
      title: <span className="text-yellow-600 font-playwrite">1975</span>,
      cardTitle: (
        <span className="text-yellow-600 font-playwrite">Founder</span>
      ),
      cardSubtitle:
        "Our story began when our founder, a passionate culinary artist with deep roots in Naples, opened the doors to a small, family-run trattoria",
      cardDetailedText:
        "Our story began when our founder, a passionate culinary artist with deep roots in Naples, opened the doors to a small, family-run trattoria",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.pexels.com/photos/1027844/pexels-photo-1027844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      },
    },
    {
      title: <span className="text-yellow-600 font-playwrite">1985</span>,
      cardTitle: (
        <span className="text-yellow-600 font-playwrite">
          Expanding The Menu
        </span>
      ),
      cardSubtitle:
        "The Menu was expanded to include regional specialties whilw building loyal clienetele through consistent quality service",
      cardDetailedText:
        "The Menu was expanded to include regional specialties whilw building loyal clienetele through consistent quality service",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      },
    },
    {
      title: <span className="text-yellow-600 font-playwrite">1995</span>,
      cardTitle: (
        <span className="text-yellow-600 font-playwrite">
          New Outdoor Seating
        </span>
      ),
      cardSubtitle:
        "An outdoor seating to capitalize on Naples along with the catering to tourist visiting the city",
      cardDetailedText:
        "An outdoor seating to capitalize on Naples' pleasant climate along with the catering to tourist visiting the city",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.pexels.com/photos/16785433/pexels-photo-16785433/free-photo-of-sentiero-degli-dei-italia.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      },
    },
    {
      title: <span className="text-yellow-600 font-playwrite">2005</span>,
      cardTitle: (
        <span className="text-yellow-600 font-playwrite">
          Menu Modification
        </span>
      ),
      cardSubtitle:
        "The Menu was modified to enhance the authantic italian experience and drinks list was expanded to complement our diverse menu",
      cardDetailedText:
        "The Menu was modified to enhance the authantic italian experience and drinks list was expanded to complement our diverse menu",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.pexels.com/photos/169391/pexels-photo-169391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      },
    },

    {
      title: (
        <span className="text-yellow-600 font-playwrite">2045-Present</span>
      ),
      cardTitle: (
        <span className="text-yellow-600 font-playwrite">
          Local Farmer Collaboration
        </span>
      ),
      cardSubtitle:
        "A collaboration with local farmes was formed to source fresh seasonal ingredients to continue the innovation while preserving the restaurant's heritage.",
      cardDetailedText:
        "A collaboration with local farmes was formed to source fresh seasonal ingredients to continue the innovation while preserving the restaurant's heritage.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      },
    },
  ];

  return (
    <div>
      <h2 className="font-vujahday text-3xl font-bold xs-mobile:mx-4 xs-mobile:my-12 md-tablet:text-7xl">
        Our Story
      </h2>
      <div>
        <Chrono
          items={items}
          theme={{
            primary: "#000",
            secondary: "#eab308",
          }}
          mode="HORIZONTAL"
          toolbarPosition="BOTTOM"
          timelinePointShape="diamond"
          borderLessCards
          highlightCardsOnHover
          slideShow
        />
      </div>
    </div>
  );
};

export default Story;
