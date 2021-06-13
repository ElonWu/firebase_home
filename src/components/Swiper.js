import React from 'react';
import { useSwipeable } from 'react-swipeable';

const EmptyFunc = () => null;

const Swiper = ({
  onSwiped = EmptyFunc,
  onSwipedLeft = EmptyFunc,
  onSwipedRight = EmptyFunc,
  onSwipedUp = EmptyFunc,
  onSwipedDown = EmptyFunc,
  onSwipeStart = EmptyFunc,
  onSwiping = EmptyFunc,
  onTap = EmptyFunc,
  ...rest
}) => {
  const config = {
    delta: 5, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  };

  const handlers = useSwipeable({
    onSwiped, // After any swipe   (SwipeEventData) => void
    onSwipedLeft, // After LEFT swipe  (SwipeEventData) => void
    onSwipedRight, // After RIGHT swipe (SwipeEventData) => void
    onSwipedUp, // After UP swipe    (SwipeEventData) => void
    onSwipedDown, // After DOWN swipe  (SwipeEventData) => void
    onSwipeStart, // Start of swipe    (SwipeEventData) => void *see details*
    onSwiping, // During swiping    (SwipeEventData) => void
    onTap, // After a tap       ({ event }) => void
    ...config,
  });

  return <div className="Swiper" {...handlers} {...rest} />;
};

export default Swiper;
