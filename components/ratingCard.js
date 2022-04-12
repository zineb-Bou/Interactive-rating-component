import ReactCardFlip from 'react-card-flip';
import RoundedBtn from './roundedBtn';
import { useState } from 'react';
import ThankYouSvg from './thank_you_svg';

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [star, setStar] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  const hanldeStar = (star) => {
    setStar(star);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="w-96 max-w-md h-[22rem] my-0 box-border rounded-2xl bg-DarkGreyBlue p-7 phone:w-72 flex flex-col justify-between">
        <span
          className="inline-block bg-DarkBlue rounded-full p-3 w-10"
          aria-hidden="true"
        >
          <svg width="17" height="16">
            <path
              d="m9.067.43 1.99 4.031a.77.77 0 0 0 .58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </span>
        <h2 className="text-White text-2xl font-semibold my-2 ">
          How did we do?
        </h2>
        <p className="text-MediumGrey text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offerings.
        </p>
        <ul className="flex justify-between my-4">
          <li className="mx-1">
            <RoundedBtn onClick={() => hanldeStar(1)}>1</RoundedBtn>
          </li>
          <li className="mx-1">
            <RoundedBtn onClick={() => hanldeStar(2)}>2</RoundedBtn>
          </li>
          <li className="mx-1">
            <RoundedBtn onClick={() => hanldeStar(3)}>3</RoundedBtn>
          </li>
          <li className="mx-1">
            <RoundedBtn onClick={() => hanldeStar(4)}>4</RoundedBtn>
          </li>
          <li className="mx-1">
            <RoundedBtn onClick={() => hanldeStar(5)}>5</RoundedBtn>
          </li>
        </ul>
        <button
          className="bg-Orange text-White tracking-wider uppercase px-4 py-2 rounded-full border-none w-full font-semibold focus:bg-White focus:text-Orange"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          Submit
        </button>
      </div>
      {/* BACK_COMPONENT */}
      <div className="flex flex-col justify-between items-center w-96 h-[22rem] box-border rounded-2xl bg-DarkGreyBlue p-7 phone:w-72">
        <ThankYouSvg className="mb-2" />
        <span className="bg-DarkBlue text-Orange text-sm py-2 px-4 mt-2  rounded-full inline-block ">
          You selected {star} out of 5
        </span>
        <p className="text-White text-3xl font-semibold  mt-2">Thank you</p>
        <p className="text-MediumGrey text-sm text-center font-semibold mt-2 ">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch.
        </p>
      </div>
    </ReactCardFlip>
  );
}
