import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { stat } from "fs";

interface RatingFormProps {
  onSubmit: (rating: number, comment: string) => void;
  textRating: string;
  textComment: string;
  star: number | undefined;
  commentRating: string | undefined;
}

const RatingForm: React.FC<RatingFormProps> = ({
  onSubmit,
  textRating,
  textComment,
  commentRating = "",
  star = 0,
}) => {
  const [rating, setRating] = useState<number>(star);
  const [comment, setComment] = useState<string>(commentRating);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(rating, comment);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>{textRating}:</Form.Label>
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((value) => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`rating-${value}`}
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => handleRatingChange(value)}
              />
              <label
                htmlFor={`rating-${value}`}
                className={`${rating >= value ? "text-warning" : ""} `}>
                <IoMdStar size={24} />
              </label>
            </React.Fragment>
          ))}
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label>{textComment}:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={handleCommentChange}
        />
      </Form.Group>
      <div className="text-center mt-3">
        <Button variant="primary" type="submit">
          <BsFillSendArrowUpFill />
        </Button>
      </div>
    </Form>
  );
};

export default RatingForm;
