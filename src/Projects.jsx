import { FiCpu, FiGlobe, FiNavigation } from 'react-icons/fi';
import styles from './Projects.module.scss';

const projects = [
  {
    title: 'RISC-V Multicore Processor',
    category: 'Computer architecture',
    metadata: 'Verilog, Python, C | Cornell ECE 4750',
    Icon: FiCpu,
    highlights: [
      'Co-developed a four-core TinyRV2 system with pipelined processors, write-back caches, and a ring interconnect; verified components through directed and randomized testing.',
      <>Implemented forwarding and hazard control, reducing binary-search benchmark cycles by <strong>53%</strong> versus a stalling-only baseline.</>,
      <>Optimized a variable-latency integer multiplier, reducing average cycles by <strong>57%</strong> on the small-operand dataset.</>,
    ],
  },
  {
    title: 'Maze Navigator',
    category: 'Embedded robotics',
    metadata: 'Arduino, MATLAB, LTspice | Cornell ECE 3400',
    href: 'https://github.com/jjjw1010/Maze-Navigator',
    Icon: FiNavigation,
    highlights: [
      'Co-built and programmed an Arduino Nano Every maze robot using three ultrasonic sensors and servo motors for right-wall-following navigation.',
      'Detected two treasures with infrared sensing, reported frequencies over RF to a base station display, and triggered automatic stopping and LED signaling.',
      'Prototyped microphone amplifier and filter circuits, compared measured responses with LTspice simulations, and analyzed audio using MATLAB and onboard FFT.',
    ],
  },
  {
    title: 'K-GRILL2GO | Web Design & Maintenance',
    category: 'Web development',
    metadata: 'Squarespace, HTML/CSS, Web Design, Content Management',
    Icon: FiGlobe,
    highlights: [
      "Manage content and ongoing updates for the restaurant's live Squarespace website, keeping menu and business information accurate and the site easy to use on mobile.",
      "Redesigned the site's layout and visuals, building four responsive pages in custom HTML/CSS that showcase the menu, business information, and contact options.",
      'Improved user experience by organizing the menu into categories and adding map directions and a contact form, helping customers find and reach the restaurant easily.',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.container} aria-labelledby="projects-heading">
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Hardware &amp; web</p>
          <h2 id="projects-heading">Projects</h2>
        </div>
        <div className={styles.grid}>
          {projects.map(({ title, category, metadata, href, Icon, highlights }) => (
            <article className={styles.card} key={title}>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
              <p className={styles.category}>{category}</p>
              <h3 className={styles.cardTitle}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} on GitHub (opens in a new tab)`}
                  >
                    {title}
                  </a>
                ) : title}
              </h3>
              {metadata && <p className={styles.metadata}><em>{metadata}</em></p>}
              {highlights ? (
                <ul className={styles.highlights}>
                  {highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
                </ul>
              ) : (
                <p className={styles.cardDescription}>Project details coming soon.</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
