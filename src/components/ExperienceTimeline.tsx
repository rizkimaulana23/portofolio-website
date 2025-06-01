import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import type { Experience } from '../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const getIcon = (company: string) => {
    if (company.toLowerCase().includes('universitas') || company.toLowerCase().includes('university')) {
      return <SchoolIcon />;
    }
    return <WorkIcon />;
  };

  const getDateRange = (startDate: string, endDate?: string) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
  };

  return (
    <Timeline position="alternate">
      {experiences.map((experience, index) => (
        <TimelineItem key={experience.id}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align={index % 2 === 0 ? 'right' : 'left'}
            variant="body2"
            color="text.secondary"
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {getDateRange(experience.startDate, experience.endDate)}
            </Typography>
            <Typography variant="body2">
              {experience.location}
            </Typography>
          </TimelineOppositeContent>
          
          <TimelineSeparator>
            <TimelineDot
              color={experience.current ? 'primary' : 'secondary'}
              variant={experience.current ? 'filled' : 'outlined'}
            >
              {getIcon(experience.company)}
            </TimelineDot>
            {index < experiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Card
              sx={{
                maxWidth: 400,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                  {experience.title}
                </Typography>
                
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500, mb: 2 }}>
                  {experience.company}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  {experience.description.map((desc, descIndex) => (
                    <Typography key={descIndex} variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                      • {desc}
                    </Typography>
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {experience.techStack.slice(0, 6).map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.7rem',
                        height: 20,
                      }}
                    />
                  ))}
                  {experience.techStack.length > 6 && (
                    <Chip
                      label={`+${experience.techStack.length - 6}`}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.7rem',
                        height: 20,
                      }}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline; 