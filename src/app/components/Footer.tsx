
import Link from 'next/link';
import { IoMdMailUnread } from 'react-icons/io';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>&copy; 2024 ERUM WARIS All rights reserved</p>
      </div>
      <div className="footer-icons">
        <Link href="mailto:erumwaris93@gmail.com" target="_blank" rel="noopener noreferrer" className="icon icon-mail">
          <IoMdMailUnread />
        </Link>
        <Link href="https://www.linkedin.com/in/erum-waris-16008b282/" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/erum-waris" target="_blank" rel="noopener noreferrer" className="icon icon-github">
          <FaGithubSquare />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

