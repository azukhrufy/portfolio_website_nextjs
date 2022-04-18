import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2018, text: 'Funded Proposal PKM-KC', },
  { number: 2018, text: 'Head of MPA HIMAKOM', },
  { number: 2018, text: 'KMIPN Finalist in Surabaya', },
  { number: 2019, text: 'Leader of Internship Group', },
  { number: 2019, text: 'Funded Proposal PKM-M', },
  { number: 2020, text: 'Best Final Project on POLBAN'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;