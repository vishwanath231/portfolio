import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const socialLinks = [
  { src: '/img/svg/social/linkedin.png', href: 'https://www.linkedin.com/in/vishwanath231/', label: 'LinkedIn' },
  { src: '/img/svg/social/github.png',   href: 'https://github.com/vishwanath231',         label: 'GitHub'   },
]

export default function Hero() {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <motion.div
              className="short"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              <h3>
                Vishwanath A{' '}
                <motion.img
                  className="svg"
                  src="/img/svg/hi.svg"
                  alt=""
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
                />
              </h3>
              <span className="job">Full-Stack Developer</span>
            </motion.div>

            <motion.div
              className="text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
            >
              <p>
                I'm a code crafter from Bengaluru, turning coffee and logic into sleek, scalable apps.
                From frontend flair to backend brains — I build the full stack with passion and precision.
              </p>
            </motion.div>

            <motion.div
              className="buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease }}
            >
              <motion.div
                className="orido_tm_boxed_button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <a className="anchor" href="#contact">
                  Say Hello <img className="svg" src="/img/svg/send.svg" alt="" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="orido_tm_follow"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
        >
          <span>Follow me:</span>
          <ul>
            {socialLinks.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <a href={link.href} target="_blank" rel="noreferrer"><img className="svg" src={link.src} alt={link.label} /></a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="avatar"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease }}
      >
        <motion.div
          className="img"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src="/img/hero/2.png" alt="" />
        </motion.div>
      </motion.div>
    </div>
  )
}
