import Image from "next/image";
import img_1 from "@/assets/img/courses/review-author.png";
import { Course } from "@/zustand/interfaces/course.interface";

interface Props {
  course: Course | null | undefined;
}

const Reviews = ({ course }: Props) => {
  return (
    <div className="courses__rating-wrap">
      <h2 className="title">Reseñas</h2>

      <div className="course-rate">
        <div className="course-rate__summary">
          <div className="course-rate__summary-value">4.8</div>
          <div className="course-rate__summary-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="course-rate__summary-text">
            {course?.reviews.length ?? 0} Valoraciones
          </div>
        </div>

        <div className="course-rate__details">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = course?.reviews.filter((r) => r.rating === rating).length || 0;
            const total = course?.reviews.length || 1;
            const width = ((count / total) * 100).toFixed(0);

            return (
              <div key={rating} className="course-rate__details-row">
                <div className="course-rate__details-row-star">
                  {rating} <i className="fas fa-star"></i>
                </div>
                <div className="course-rate__details-row-value">
                  <div className="rating-gray"></div>
                  <div
                    className="rating"
                    style={{ width: `${width}%` }}
                    title={`${width}%`}
                  ></div>
                  <span className="rating-count">{count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {course?.reviews.map((review) => (
        <div key={review.id} className="course-review-head">
          <div className="review-author-thumb">
            <Image src={img_1} alt="imagen del autor de la reseña" />
          </div>
          <div className="review-author-content">
            <div className="author-name">
              <h5 className="name">
                {review.user.name} <span>{new Date(review.created_at).toLocaleDateString()}</span>
              </h5>
              <div className="author-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star${i < review.rating ? "" : "-o"}`}
                  ></i>
                ))}
              </div>
            </div>
            {/* <h4 className="title">Título no disponible</h4> */}
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
