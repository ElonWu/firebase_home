import styled from 'styled-components';
import { motion } from 'framer-motion';

const List = styled(motion.ul).attrs({
  initial: 'hidden',
  animate: 'visible',
  variants: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
})``;

const Item = styled(motion.li).attrs({
  whileHover: {
    scale: 1.04,
  },
  variants: {
    visible: ({ i, col }) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: genDelay(i, col),
      },
    }),
    hidden: ({ i, col }) => ({ opacity: 0, x: (i % col ? 1 : -1) * 300 }),
  },
})`
  list-style: none;
`;

const genDelay = (i, col) => {
  const rowDelayRatio = 0.8,
    columnDelayRatio = 0.2;

  if (col == 1) return Math.log10(i) * rowDelayRatio;

  // if (col === 2)
  return i % col === 0
    ? Math.log10(i / col) * rowDelayRatio
    : Math.log10((i - (i % col)) / col) * rowDelayRatio +
        (i % col) * columnDelayRatio;
};

List.Item = Item;

export default List;
