import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { StyledCompany, StyledText, StyledTitle } from './TimelineStyles';

import { careerTimeline } from '../../assets/content/timeline';

export default function MyTimeline() {
  return (
    <Timeline position="alternate">
      {careerTimeline.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right">
            <StyledCompany>{item.time}</StyledCompany>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>{item.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              padding: {xs: '0px 16px', sm: '0px 16px', md: '5px 16px' },
            }}
          >
            <StyledTitle component="span">{item.title}</StyledTitle>
            <StyledCompany>
              {item.company} • {item.location}
            </StyledCompany>
            <StyledText>{item.description}</StyledText>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
