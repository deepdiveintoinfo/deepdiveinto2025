import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import logo from '@/assets/united-states.svg';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Contribute',
    links: [
      { name: 'How to Contribute', href: '/contribute' },
      { name: 'Transcription Guides', href: 'https://github.com/deepdiveinto2025/deepdiveinto2025/wiki/%F0%9F%96%8B%EF%B8%8F-Transcription-Guide' },
      { name: 'Analysis Methods', href: 'https://github.com/deepdiveinto2025/deepdiveinto2025/wiki/%F0%9F%93%96-Glossary-of-Terms:-Content#-types-of-analysis' },
      { name: 'Project 2025 Full PDF', href: 'https://static.project2025.org/2025_MandateForLeadership_FULL.pdf' },
      { name: 'GitHub Repository', href: 'https://github.com/deepdiveinto2025/deepdiveinto2025' },
    ],
  },
  {
    title: 'Wiki',
    links: [
      { name: 'Glossary of Terms', href: 'https://github.com/deepdiveinto2025/deepdiveinto2025/wiki/%F0%9F%93%96-Glossary-of-Terms:-Content' },
      { name: 'Breakdown Levels', href: 'https://github.com/deepdiveinto2025/deepdiveinto2025/wiki/%F0%9F%93%9D-Breakdown-Levels' },
      { name: 'Editorial Policies', href: 'https://github.com/deepdiveinto2025/deepdiveinto2025/wiki/%F0%9F%96%8B%EF%B8%8F-Editorial-Policies' },
      { name: 'Frequently Asked Questions', href: '/faq' },
    ],
  },
  {
    title: 'Miscellaneous',
    links: [
      { name: 'Email', href: 'mailto:deepdiveinto2025@gmail.com' },
      { name: 'Terms and Conditions', href: '/terms-and-conditions' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-1 lg:justify-start">
                  <img
                    src={logo}
                    className="w-8 mr-3"
                    alt="logo"
                  />
                <span className="text-xl font-bold" style={{fontFamily: '"Cormorant Garamond", serif', fontWeight: 700}}>DEEPDIVE</span><span style={{fontFamily: '"Dancing Script", cursive'}}>into2025</span>
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  Analyzing Project 2025 with transparency, accessibility, and accountability.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
              
              <li className="font-medium hover:text-primary">
                  <Link to="https://github.com/deepdiveinto2025/deepdiveinto2025">
                    <FaGithub className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary hidden">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary hidden">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary hidden">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary hidden">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 text-sm sm:text-base font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <Link to={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 DeepDiveInto20205. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link to="/terms-and-conditions"> Terms and Conditions</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/privacy-policy"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
