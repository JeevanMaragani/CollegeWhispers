// whisper/client/src/components/TestMotion.js
import React from 'react';
import { motion } from 'framer-motion';

const TestMotion = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-200 p-4 rounded-lg shadow-lg"
    >
        <h2 className="text-lg font-bold text-blue-700">Framer Motion is Working!</h2>
    </motion.div>
);

export default TestMotion;
