"use client";
import Image from "next/image";
import { useState } from "react";

const Review = ({ review }) => {
  const [showAll, setShowAll] = useState(false);
  const [newReview, setNewReview] = useState("");

  const visibleReviews = showAll ? review : review.slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Review:", newReview);
    setNewReview("");
  };

  //   const renderStars = () => {
  //     const stars = [];
  //     for (let i = 0; i < rating; i++) {
  //       stars.push(<StarIcon key={i} className="h-5 w-5 text-yellow-500" />);
  //     }
  //     return stars;
  //   };

  return (
    <div className="px-5">
      <form
        onSubmit={handleSubmit}
        className="mb-5 flex flex-col md:flex-row gap-5"
      >
        <input
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          className="w-full md:w-4/5 p-2 border rounded"
          placeholder="Write a review..."
        />
        <button
          type="submit"
          className="w-full sm:w-1/2 md:w-1/5 bg-blue text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {visibleReviews.map((item, index) => {
        return (
          <div className="flex items-start mb-6" key={index}>
            <Image
              className="w-12 h-12 rounded-full mr-4"
              src="https://res.cloudinary.com/cloudofvivek/image/upload/v1713698775/menu/avatar_qbtk0t.svg"
              width={100}
              height={100}
              alt={`Avatar of ${item.name}`}
            />
            <div>
              <div className="flex items-center mb-1">
                <h3 className="font-semibold mr-2">{item.name}</h3>
                {/*<div className="flex">{renderStars()}</div>*/}
              </div>
              <p className="text-metal_grey line-clamp-1">{item.content}</p>
            </div>
          </div>
        );
      })}
      {!showAll && review.length > 4 ? (
        <button
          className="text-blue underline mt-2"
          onClick={() => setShowAll(true)}
        >
          Show More
        </button>
      ) : (
        <button
          className="text-blue underline mt-2"
          onClick={() => setShowAll(false)}
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default Review;
