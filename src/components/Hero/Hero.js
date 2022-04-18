import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Azukhrufy Portfolio
      </SectionTitle>
      <SectionText>
      Currently as a software engineer at Neural Technologies Indonesia, responsible to develop ERP System and Collaborates with all of element for implementing advance business solution.
      Experience in Mobile App development, Web Front End Development and leading an organization. Passionate to learn something new about technology.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/azukhrufy/','_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;