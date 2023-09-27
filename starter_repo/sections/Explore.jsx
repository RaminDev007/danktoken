'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings} yellow`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* <TypingText title="The Dankify Mascot" textStyles="text-center" />
        <TitleText
          title={
            <>
              Dankify($DANKI) is a revolutioary meme coin featuring our
              furturistic LOLlama mascot spreading 'laughter dust' wherever he
              roams.
            </>
          }
          textStyles="text-center"
        /> */}

        <div className="p-8 mt-[10px] flex lg:flex-row flex-col min-h-[70vh] gap-5 rounded-md bg-gradient-to-r from-purple-500 from-10% via-purple-400 via-30% to-purple-300 to-90% hover:from-pink-500 hover:to-yellow-500">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
