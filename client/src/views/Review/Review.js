// import React from "react";
// import Navbar from './../../components/Navbar/Navbar';
// import './Review.css';

// const reviews = [
//   {
//     name: "Alice Johnson",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 5,
//     text: "This website completely changed the way I organize my tasks. Highly recommended!"
//   },
//   {
//     name: "Michael Smith",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: 4,
//     text: "Sleek design, intuitive interface. Definitely one of the best platforms out there."
//   },
//   {
//     name: "Sara Lee",
//     img: "https://randomuser.me/api/portraits/women/68.jpg",
//     rating: 5,
//     text: "Customer support was fantastic. They helped me solve my issue within minutes."
//   },
//   {
//     name: "David Kim",
//     img: "https://randomuser.me/api/portraits/men/75.jpg",
//     rating: 4,
//     text: "I love how fast and responsive everything is. Works great on my phone too!"
//   },
//   {
//     name: "Emma Wilson",
//     img: "https://randomuser.me/api/portraits/women/21.jpg",
//     rating: 5,
//     text: "I’ve been using this service for months and it keeps getting better."
//   },
//   {
//     name: "Carlos Rivera",
//     img: "https://randomuser.me/api/portraits/men/85.jpg",
//     rating: 4,
//     text: "Absolutely love the user-friendly experience. Super smooth and fast."
//   }
// ];

// const ReviewCard = ({ review }) => {
//   const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

//   return (
//     <div className="review-card">
//       <div className="reviewer">
//         <img src={review.img} alt={review.name} className="review-img" />
//         <div className="reviewer-info">
//           <span className="reviewer-name">{review.name}</span>
//           <span className="review-rating">{stars}</span>
//         </div>
//       </div>
//       <p className="review-text">"{review.text}"</p>
//     </div>
//   );
// };

// const Review = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="review-section-wrapper">
//         <h2 className="section-title">What Our Users Say</h2>
//         <div className="review-grid">
//           {reviews.map((review, idx) => (
//             <ReviewCard key={idx} review={review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;


import React from "react";
import Navbar from './../../components/Navbar/Navbar';
import './Review.css';

const reviews = [
  {
    name: "Vaibhavi Kumbhalkar",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "This website completely changed the way I organize my tasks. Highly recommended!"
  },
  {
    name: "Shree Dhopte",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Sleek design, intuitive interface. Definitely one of the best platforms out there."
  },
  {
    name: "Janhvi Dhanare",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Customer support was fantastic. They helped me solve my issue within minutes."
  },
  {
    name: "Bhushan Bawankar",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    text: "I love how fast and responsive everything is. Works great on my phone too!"
  },
  {
    name: "Aditi Naldulkar",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    text: "I have been using this service for months and it keeps getting better."
  },
  {
    name: "Prathmesh Bangde",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 4,
    text: "Absolutely love the user-friendly experience. Super smooth and fast."
  }
];

const ReviewCard = ({ review }) => {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

  return (
    <div className="review-card">
      <div className="reviewer">
        <img src={review.img} alt={review.name} className="review-img" />
        <div className="reviewer-info">
          <span className="reviewer-name">{review.name}</span>
          <span className="review-rating">{stars}</span>
        </div>
      </div>
      <p className="review-text">"{review.text}"</p>
    </div>
  );
};

const Review = () => {
  return (
    <div>
      <Navbar />
      <div className="review-section-wrapper">
        <h2 className="section-title">What Users Say About Us</h2>
        <div className="review-grid">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
