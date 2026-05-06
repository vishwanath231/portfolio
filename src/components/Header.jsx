import { motion } from 'framer-motion'

export default function Header() {
  return (
    <>
      {/* Desktop header */}
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
            <a href="#home"><img src="/img/logo/logo.png" alt="" /></a>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <div className="orido_tm_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="#home"><img src="/img/logo/logo.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
