import { curve, heroBackground, robot } from "../../assets";
import Button from "../common/Button";
import Section from "../common/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { heroIcons } from "../../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../common/Generating";
import Notification from "../common/Notification";
import CompanyLogos from "../CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hey, I'm{" "}
            <span className="inline-block relative">
              <span className="px-1 rounded">@</span>
              <a
                href="https://github.com/manishgond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-n-1 hover:text-color-1 transition-colors duration-200"
              >
                manishgond
              </a>{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-1"
                width={624}
                height={28}
                alt="Curve"
                style={{
                  filter: "drop-shadow(0 0 2px rgba(172, 106, 255, 0.5))",
                  background: "linear-gradient(90deg, #AC6AFF, #AC6AFF)",
                  maskImage: `url(${curve})`,
                  WebkitMaskImage: `url(${curve})`,
                  maskSize: "cover",
                  WebkitMaskSize: "cover",
                }}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            A full-stack developer passionate about creating interactive
            applications and experiences on the web.
          </p>
          <Button href="#projects" className="text-lg px-8 py-4" white>
            View My Work
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[22rem] xl:flex" />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
