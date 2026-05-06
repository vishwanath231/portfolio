import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, margin: '-60px' }

const skills = [
  { src: '/img/svg/coding/typescrpt.svg', name: 'Typescript' },
  { src: '/img/svg/coding/reactjs.svg', name: 'ReactJs' },
  { src: '/img/svg/coding/nodejs.svg', name: 'NodeJs' },
  { src: '/img/svg/coding/express.svg', name: 'ExpressJs' },
  { src: '/img/svg/coding/redux.svg', name: 'Redux' },
  { src: '/img/svg/coding/flask.svg', name: 'Flask' },
  { src: '/img/svg/coding/restapi.svg', name: 'API' },
  { src: '/img/svg/coding/mongodb.svg', name: 'MongoDB' },
  { src: '/img/svg/coding/mysql.svg', name: 'MySQL' },
  { src: '/img/svg/coding/git.svg', name: 'GIT' },
  { src: '/img/svg/coding/docker.svg', name: 'Docker' },
  { src: '/img/svg/coding/githubaction.svg', name: 'CI/CD' },
  { src: '/img/svg/coding/ansible.svg', name: 'Ansible' },
  { src: '/img/svg/coding/nginx.svg', name: 'Nginx' },
  { src: '/img/svg/coding/azure.svg', name: 'Azure' },
  { src: '/img/svg/coding/gcp.svg', name: 'GCP' },
  { src: '/img/svg/coding/playwright.svg', name: 'Playwright' },
  { src: '/img/svg/coding/sonarqube.svg', name: 'SonarQube' },
  { src: '/img/svg/coding/flutter.svg', name: 'Flutter' },
  { src: '/img/svg/coding/firebase.svg', name: 'Firebase' },
]

const experience = [
  { year: 'Jun 2023 - Present', company: 'GWC DATA.AI', role: 'Full-Stack Developer' },
  { year: 'Jan 2023 - May 2023', company: 'Mobile Tutor', role: 'Full-Stack Developer Intern' },
]

const education = [
  { year: '2021 - 2023', company: 'Bharatiar University', role: 'Master of Computer Applications' },
  { year: '2018 - 2021', company: 'National College', role: 'Bachelor of Computer Applications' },
]

const tabVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.25 } },
}

const skillItem = {
  hidden: { opacity: 0, scale: 0.75, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

const TABS = [
  { id: 'tab_1', label: 'Skills' },
  { id: 'tab_2', label: 'Experience' },
  { id: 'tab_3', label: 'Education' },
]

export default function Informations() {
  const [activeTab, setActiveTab] = useState('tab_1')
  const filterRef = useRef(null)
  const cccRef = useRef(null)

  useEffect(() => {
    const filter = filterRef.current
    const ccc = cccRef.current
    if (!filter || !ccc) return
    const activeLink = filter.querySelector('a.current')
    if (!activeLink) return
    const li = activeLink.closest('li')
    ccc.style.left = li.offsetLeft + 'px'
    ccc.style.width = li.offsetWidth + 'px'
  }, [activeTab])

  return (
    <div className="orido_tm_section">
      <div className="orido_tm_informations">
        <div className="container">
          <div className="informations_inner">
            {/* Left */}
            <motion.div
              className="left"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, ease }}
            >
              <div className="orido_tm_main_title">
                <h3><span>My expert<br />areas</span></h3>
              </div>
              <motion.div
                className="text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, delay: 0.2, ease }}
              >
                <p>
                  I specialize in building secure, scalable full-stack web applications using modern
                  technologies. With hands-on experience across frontend, backend, cloud, and DevOps,
                  I develop solutions that are fast, maintainable, and optimized for performance.
                </p>
                <p>
                  You'll find me working with React, Node.js, TypeScript, Docker, Azure, and more—always
                  focused on delivering clean architecture and seamless user experiences.
                </p>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              className="right"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, delay: 0.15, ease }}
            >
              {/* Tab filter */}
              <div className="filter" ref={filterRef}>
                <ul>
                  {TABS.map((tab, i) => (
                    <motion.li
                      key={tab.id}
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    >
                      <a
                        className={`c-pointer${activeTab === tab.id ? ' current' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span>{tab.label}</span>{' '}
                        <img className="svg" src="/img/svg/top-arrow.svg" alt="" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <span className="ccc" ref={cccRef} />
              </div>

              {/* Tab content with AnimatePresence */}
              <div className="content">
                <AnimatePresence mode="wait">
                  {activeTab === 'tab_1' && (
                    <motion.div
                      key="tab_1"
                      className="wrapper current"
                      variants={tabVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="skillbox">
                        <motion.ul
                          variants={{
                            visible: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
                          }}
                          initial="hidden"
                          animate="visible"
                        >
                          {skills.map(skill => (
                            <motion.li key={skill.name} variants={skillItem} transition={{ duration: 0.4, ease }}>
                              <motion.div
                                className="list_inner"
                                whileHover={{ y: -4, scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                              >
                                <span className="icon">
                                  <span className="in">
                                    <img className="svg" src={skill.src} alt="" />
                                  </span>
                                </span>
                                <p className="name">{skill.name}</p>
                              </motion.div>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'tab_2' && (
                    <motion.div
                      key="tab_2"
                      className="wrapper current"
                      variants={tabVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="timelinebox">
                        <motion.ul
                          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                          initial="hidden"
                          animate="visible"
                        >
                          {experience.map(item => (
                            <motion.li key={item.company} variants={timelineItem} transition={{ duration: 0.5, ease }}>
                              <div className="list_inner">
                                <div className="time">
                                  <span className="year">{item.year}</span>
                                  <span className="company">{item.company}</span>
                                </div>
                                <div className="job">
                                  <h3><span>{item.role}</span></h3>
                                </div>
                              </div>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'tab_3' && (
                    <motion.div
                      key="tab_3"
                      className="wrapper current"
                      variants={tabVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="timelinebox">
                        <motion.ul
                          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                          initial="hidden"
                          animate="visible"
                        >
                          {education.map(item => (
                            <motion.li key={item.company} variants={timelineItem} transition={{ duration: 0.5, ease }}>
                              <div className="list_inner">
                                <div className="time">
                                  <span className="year">{item.year}</span>
                                  <span className="company">{item.company}</span>
                                </div>
                                <div className="job">
                                  <h3><span>{item.role}</span></h3>
                                </div>
                              </div>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
