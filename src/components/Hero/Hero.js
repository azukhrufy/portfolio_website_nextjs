import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Azukhrufy Portfolio
      </SectionTitle>
      <SectionText>
        Software Engineer with 5+ years of experience building scalable web apps
        using Node.js and Next.js. Skilled in delivering solutions under tight
        deadlines, collaborating on multinational teams, and thriving in
        fast-paced startups. Passionate about creating seamless user experiences
        and writing clean, maintainable code. Lets connect to bring your ideas
        to life.
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://www.linkedin.com/in/azukhrufy/", "_blank")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
