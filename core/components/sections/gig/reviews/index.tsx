"use client";
import Button from "@core/components/elements/button";
import Label from "@core/components/elements/label";
import { Gig } from "@prisma/client";
import axios from "axios";
import { MouseEvent, useState } from "react";
import Review from "./review";

type Props = {
  userId: string;
  gigId:string
};
const Reviews = ({ userId, gigId }: Props) => {
  const [fields, setFields] = useState({
    message: "",
    rate: '5',
  });

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/data/users/${userId}/reviews`, {
        ...fields,
        clientId: userId,
        gigId: gigId
      });
      if (response.status === 201) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="contain space-y-4">
      <div>
        <textarea
          id="message"
          placeholder="What's your review?"
          value={fields.message}
          onChange={(event) =>
            setFields({ ...fields, message: event.target.value })
          }
          className="w-full rounded border-none p-4 outline-none"
        />
        <input
          type="number"
          max={5}
          min={1}
          value={fields.rate}
          onChange={(event) =>
            setFields({ ...fields, rate: event.target.value })
          }
        />
        <Button onClick={handleSubmit}>Post</Button>
      </div>
      <section>
        <Label>Reviews</Label>
        <div className="columns-4 gap-4">
          <Review
            name="cpnbarbosa"
            location="Cambodia"
            comment="Very effective and attentive,  Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam with close attention to the problem. 100% recommended and hope to work with again in the future."
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam facilis cumque enim molestiae cum asperiores officiis, eaque quo ad qui illo voluptatem obcaecati. Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam accusamus impedit nam aliquid nisi natus corrupti distinctio. Maiores, pariatur minima quis reprehenderit recusandae commodi. Facilis, nam!"
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has  Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam everything that I wanted! Hope to work with him again!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam facilis cumque enim molestiae cum asperiores officiis, eaque quo ad qui illo voluptatem obcaecati.accusamus impedit nam aliquid nisi natus corrupti distinctio. Maiores, pariatur minima quis reprehenderit recusandae commodi. Facilis, nam!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and h Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam e has everything that I wanted! Hope to work with him again!"
          />
          <Review
            name="cpnbarbosa"
            location="Cambodia"
            comment="Very effective and attentive,  Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam with close attention to the problem. 100% recommended and hope to work with again in the future."
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam facilis cumque enim molestiae cum asperiores officiis, eaque quo ad qui illo voluptatem obcaecati. Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam accusamus impedit nam aliquid nisi natus corrupti distinctio. Maiores, pariatur minima quis reprehenderit recusandae commodi. Facilis, nam!"
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has  Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam everything that I wanted! Hope to work with him again!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam facilis cumque enim molestiae cum asperiores officiis, eaque quo ad qui illo voluptatem obcaecati.accusamus impedit nam aliquid nisi natus corrupti distinctio. Maiores, pariatur minima quis reprehenderit recusandae commodi. Facilis, nam!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and h Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam e has everything that I wanted! Hope to work with him again!"
          />
          <Review
            name="cpnbarbosa"
            location="Cambodia"
            comment="Very effective and attentive,  Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam with close attention to the problem. 100% recommended and hope to work with again in the future."
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam facilis cumque enim molestiae cum asperiores officiis, eaque quo ad qui illo voluptatem obcaecati. Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam accusamus impedit nam aliquid nisi natus corrupti distinctio. Maiores, pariatur minima quis reprehenderit recusandae commodi. Facilis, nam!"
          />
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has  Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam everything that I wanted! Hope to work with him again!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam facilis cumque enim molestiae cum asperiores officiis, eaque quo ad qui illo voluptatem obcaecati.accusamus impedit nam aliquid nisi natus corrupti distinctio. Maiores, pariatur minima quis reprehenderit recusandae commodi. Facilis, nam!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and he has everything that I wanted! Hope to work with him again!"
          />{" "}
          <Review
            name="naturalgraphy"
            location="Sri Lanka"
            comment="Quick and calm person and h Iure quibusdam quas laborum temporibus asperiores.
          Libero tenetur sint debitis dolore ipsum fugit nulla et quas, ipsam corporis numquam e has everything that I wanted! Hope to work with him again!"
          />
        </div>
      </section>
    </section>
  );
};

export default Reviews;
