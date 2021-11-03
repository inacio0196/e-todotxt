import React from 'react';
import { motion } from 'framer-motion';

const Today: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>Today</h1>
    </motion.div>
  );
};

export default Today;
