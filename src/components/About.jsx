import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, margin: '-80px' }

export default function About() {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <motion.div
            className="left"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              className="box"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="year">3+</h3>
              <span className="experience">Years of Experience</span>
              {/* <h3 className="name">Vishwanath A</h3> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="right"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <span className="element"><img className="svg" src="/img/svg/element.svg" alt="" /></span>

            <motion.div
              className="orido_tm_main_title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <h3><span>About Me</span></h3>
            </motion.div>

            <motion.div
              className="text"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              <p>
                Full-Stack Developer with 3+ years of experience delivering secure, scalable, and cloud-ready
                web applications. Adept at bridging frontend and backend development with a strong foundation
                in DevOps and modern architecture practices. Known for building reliable, user-focused solutions
                and contributing across the full product lifecycle in fast-paced Agile environments.
              </p>
            </motion.div>

            <motion.div
              className="short"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.6, ease }}
            >
              <motion.div
                className="orido_tm_boxed_button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <a href="/resume/VishwanathA_SoftwareDeveloper_Resume.pdf" download style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  My Resume<img className="svg" src="/img/svg/paper.svg" alt="" style={{ margin: 0 }} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
