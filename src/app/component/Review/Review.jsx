"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
  const [showAll, setShowAll] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [newReviewEmail, setNewReviewEmail] = useState("");
  const [newReviewName, setNewReviewName] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const visibleReviews = showAll ? review : review.slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      name: newReviewName,
      email: newReviewEmail,
      content: newReview,
      rating: rating,
    };
    console.log(reviewData);

    // Clear the form data
    setNewReview("");
    setNewReviewEmail("");
    setNewReviewName("");
    setRating(0);
    setHover(0);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          size={24}
          style={{ cursor: "pointer", marginRight: 5 }}
          color={i <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          onClick={() => setRating(i)}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(rating)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="px-5">
      <form onSubmit={handleSubmit} className="mb-5 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">{renderStars()}</div>
          <div className="flex sm:flex-row flex-col gap-4">
            <input
              value={newReviewName}
              onChange={(e) => setNewReviewName(e.target.value)}
              className="w-full sm:w-1/2 p-4 border rounded"
              placeholder="Name"
            />
            <input
              type="email"
              value={newReviewEmail}
              onChange={(e) => setNewReviewEmail(e.target.value)}
              className="w-full sm:w-1/2 p-2 border rounded"
              placeholder="Email"
            />
          </div>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="w-full p-4 border rounded"
            placeholder="Write a review..."
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-1/2 md:w-1/6 bg-blue text-white py-2 px-4 rounded"
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
