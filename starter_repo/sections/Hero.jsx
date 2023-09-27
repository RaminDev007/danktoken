'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Socials from '../components/Socials';

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 bg-[url('/newBG.png')] bg-cover`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div
        id="home"
        className="flex justify-center items-center flex-col relative z-10 py-[100px]"
      >
        {/* <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Dankify (DANK)
        </motion.h1> */}
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-center items-center"
        >
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>ankify</h1>
        </motion.div>
        <p className="text-white text-center w-[1/2] mt-[30px] sm:display-none font-extrabold text-lg">
          Welcome to Dankify ($DANKI), where your ROFLs meet ROI! LOLlama, our
          hilariously fluffy mascot, invites you to dive into the universe of
          meme-tastic profit. It's so Dank, Even Your Grandma Will Want to HODL!
        </p>
        <p className="text-white text-center w-[1/2] mt-[20px] text-xl font-extrabold">
          A new era, a new crypto, a new meme!
        </p>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px] m-auto items-center flex flex-col"
      >
        {/* <div className="absolute w-full h-[350px] hero-gradient rounded-[140px] z-[0] -top-[30px]" /> */}
        <img
          src="/bg-no1.png"
          alt="background"
          className="flex bg-auto md:bg-contain relative z-10 bg-center m-auto h-[300px] w-[300px] sm:h-[600px] sm:w-[600px]"
          size="300px"
        />
        {/* <a href="#explore">
          <div className="w-full flex justify-right sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a> */}
        <Socials />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
