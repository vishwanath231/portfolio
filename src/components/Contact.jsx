import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, margin: '-60px' }

const connectItems = [
  { label: 'Call:', value: '+91 6385213119', href: 'tel:+916385213119' },
  { label: 'Email:', value: 'vishwanatharuchunan@gmail.com', href: 'mailto:vishwanatharuchunan@gmail.com' },
]

const socialLinks = [
  { src: '/img/svg/social/linkedin.png', href: 'https://www.linkedin.com/in/vishwanath231/', label: 'LinkedIn' },
  { src: '/img/svg/social/github.png',   href: 'https://github.com/vishwanath231',         label: 'GitHub'   },
]

export default function Contact() {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <motion.div
            className="infobox"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
          >
            <motion.div
              className="text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <h3>Let's build something awesome together 🚀</h3>
              <p>
                Got an idea? I turn concepts into fast, secure, and scalable web apps. Whether it's
                frontend flair, backend logic, or cloud magic—I'm here to code it into reality. Let's
                team up and make it happen.
              </p>
            </motion.div>
            <motion.div
              className="orido_tm_boxed_button"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <a href="mailto:vishwanatharuchunan@gmail.com">
                Say Hello <img className="svg" src="/img/svg/send.svg" alt="" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="connect"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            <div className="left">
              <ul>
                {connectItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease }}
                  >
                    <span className="name">{item.label}</span>
                    <p><a className="line_effect" href={item.href}>{item.value}</a></p>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  {socialLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <img className="svg" src={link.src} alt={link.label} />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        <span className="element"><img className="svg" src="/img/svg/elements.svg" alt="" /></span>
        <span className="element2"><img className="svg" src="/img/svg/element-2.svg" alt="" /></span>
      </div>
    </div>
  )
}
