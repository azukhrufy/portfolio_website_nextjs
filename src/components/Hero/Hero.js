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
      <SectionTitle main center as="h1">
Welcome to <br />
        Azukhrufy Portfolio
      </SectionTitle>
      <SectionText>
        Professional Software Engineer and Frontend Engineer with 5+ years of experience building scalable web applications
        using React, Node.js, and Next.js. Currently working at MySkill.id.
        Based in Bandung, Indonesia. Skilled in delivering innovative solutions under tight
        deadlines, collaborating with multinational teams, and thriving in
        fast-paced startup environments. Passionate about creating seamless user experiences
        and writing clean, maintainable code as a dedicated programmer.
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://www.linkedin.com/in/azukhrufy/", "_blank")
        }
        aria-label="Connect with Ananda Zukhruf on LinkedIn"
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
