import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.div
      className="orido_tm_header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header_in">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#"><img src="/img/logo/logo.png" alt="" /></a>
        </motion.div>
      </div>
    </motion.div>
  )
}
