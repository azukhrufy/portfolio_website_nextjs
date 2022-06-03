import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

export default function AlternateTimeline() {
  return (
    <Section id="about">
        <SectionDivider />
        <SectionTitle main>About me</SectionTitle>
        <SectionText>
            There is my timeline so far as Software Engineer
        </SectionText>
        <Timeline position="alternate">
            {TimeLineData.map((item) => 
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h3" component="span" >
                            {item.year}
                        </Typography>
                        <Typography variant="h5" style={{color: 'rgba(255,255,255,0.75)'}}>{item.text}</Typography>
                    </TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    </Section>
    
  );
}
