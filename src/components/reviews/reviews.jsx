"use client";
import { useState } from "react";
import styles from "./reviews.module.css";
import ReviewsCard from "./reviewsCard/reviewsCard";
import { dataReviews } from "@/data/dataReviews";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

export default function Reviews() {
  const [index, setIndex] = useState(1);

  const handleChange = (param) => {
    setIndex((prev) => {
      if (param === "more") {
        return prev === 3 ? 1 : prev + 1;
      } else {
        return prev === 1 ? 3 : prev - 1;
      }
    });
  };

  return (
    <div className={`${styles.bodyReviews} padding`}>
      <div className={`${styles.container} width`}>
        <h1 className="mainTitle">Historias de aprendizaje con Agustina</h1>

        <div className={styles.containerReviews}>
          <div>
            <TfiArrowCircleLeft
              className={styles.icon}
              onClick={() => handleChange("less")}
            />
          </div>

          {dataReviews &&
            dataReviews.map((review) => {
              if (review.index === index) {
                return (
                  <ReviewsCard
                    key={review.id}
                    desc={review.desc}
                    name={review.name}
                    role={review.role}
                  />
                );
              }
              return null;
            })}

          <div>
            <TfiArrowCircleRight
              className={styles.icon}
              onClick={() => handleChange("more")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
