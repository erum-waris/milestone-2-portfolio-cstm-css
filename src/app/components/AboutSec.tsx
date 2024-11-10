import Image from 'next/image';
import Button from './Button';

const AboutSec = () => {
  return (
    <div className="about-me-container">
      <div className="text-container">
        <h2 className="heading-gradient">
          About Me
        </h2>
        <h1 className="text-big">I am a Passionate FrontEnd Developer</h1>
      <p className="text-content">  I am creating responsive modern web applications
      I am a student at GIAIC Governor Initiative for Artificial Intelligence Web 3.0 & Metaverse
        I have been working on HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and Next.js
        Simultaneously, I am learning React.js and Basics of FrontEnd Development in Xounity Online FrontEnd Bootcamp
        Driven by innovation, I combine design with seamless functionality</p>
        <div className="buttons">
          <Button text="LinkedIn" href="https://www.linkedin.com/in/erum-waris-16008b282/" />
          <Button text="GitHub" href="https://github.com/erum-waris" />
        </div>
        </div>

      {/* Right Image */}
      <div className="image-container ">
        <Image
          src="/images/AI_img_1.jpeg"
          alt="Developer"
          width={550}
          height={400}
        />
      </div>
    
    </div>
  );
};

export default AboutSec;
