'use client';

import { motion } from 'framer-motion';
import { Footer, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Explore from './Explore';
import GetStarted from './GetStarted';
import Tokenomics from './WhatsNew';
import Insights from './Insights';

const About = () => (
  <section
    id="about"
    className={`${styles.paddings} relative z-10 bg-[url('/newBG.png')] bg-contain `}
  >
    <div className="gradient-02 z-0"></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Dankify" textStyle="text-center" id="about" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        We're the meme-fanatics who got bored of the seriousness of the crypto
        world. So, we turned the tables and created{' '}
        <span className="font-extrabold text-white">Dankify ($DANKI)</span>, the
        token that promises belly-laughs and fun-tastic community! Dankify isn't
        just about those "Bit-grins", it's about a cosmic eruption of
        "Bit-guffaws"! We are here to ensure your laughter reaches the moon
        before your crypto-wallet does. Strap on your space helmets, memesters,
        we are ready for the hilarious launch!
      </motion.p>
      <motion.img
        variants={fadeIn('up', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[50px] h-[50px] object-contain mt-[28px] a"
      ></motion.img>
    </motion.div>
    <Explore />
    <Tokenomics />
    <GetStarted />
    <Insights />
  </section>
);

export default About;
