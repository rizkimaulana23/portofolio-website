import React from 'react';
import { Box, Typography } from '@mui/material';
import { TechStack } from '../types';

// Import logos
import reactLogo from '../assets/logos/react.svg';
import vueLogo from '../assets/logos/vue.svg';
import angularLogo from '../assets/logos/angular.svg';
import typescriptLogo from '../assets/logos/typescript.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import htmlLogo from '../assets/logos/html.svg';
import cssLogo from '../assets/logos/css.svg';
import tailwindLogo from '../assets/logos/tailwind.svg';
import muiLogo from '../assets/logos/mui.svg';
import bootstrapLogo from '../assets/logos/bootstrap.svg';
import reactNativeLogo from '../assets/logos/react-native.svg';
import flutterLogo from '../assets/logos/flutter.svg';
import nextLogo from '../assets/logos/next.svg';
import nuxtLogo from '../assets/logos/nuxt.svg';
import svelteLogo from '../assets/logos/svelte.svg';
import nodeLogo from '../assets/logos/node.svg';
import expressLogo from '../assets/logos/express.svg';
import pythonLogo from '../assets/logos/python.svg';
import djangoLogo from '../assets/logos/django.svg';
import flaskLogo from '../assets/logos/flask.svg';
import javaLogo from '../assets/logos/java.svg';
import springLogo from '../assets/logos/spring.svg';
import postgresqlLogo from '../assets/logos/postgresql.svg';
import mongodbLogo from '../assets/logos/mongodb.svg';
import dockerLogo from '../assets/logos/docker.svg';
import awsLogo from '../assets/logos/aws.svg';
import gitLogo from '../assets/logos/git.svg';

const techStackLogos: Record<TechStack, string> = {
  [TechStack.REACT]: reactLogo,
  [TechStack.VUE]: vueLogo,
  [TechStack.ANGULAR]: angularLogo,
  [TechStack.TYPESCRIPT]: typescriptLogo,
  [TechStack.JAVASCRIPT]: javascriptLogo,
  [TechStack.HTML]: htmlLogo,
  [TechStack.CSS]: cssLogo,
  [TechStack.TAILWIND]: tailwindLogo,
  [TechStack.MATERIAL_UI]: muiLogo,
  [TechStack.BOOTSTRAP]: bootstrapLogo,
  [TechStack.REACT_NATIVE]: reactNativeLogo,
  [TechStack.FLUTTER]: flutterLogo,
  [TechStack.NEXT_JS]: nextLogo,
  [TechStack.NUXT_JS]: nuxtLogo,
  [TechStack.SVELTE]: svelteLogo,
  [TechStack.NODE_JS]: nodeLogo,
  [TechStack.EXPRESS_JS]: expressLogo,
  [TechStack.PYTHON]: pythonLogo,
  [TechStack.DJANGO]: djangoLogo,
  [TechStack.FLASK]: flaskLogo,
  [TechStack.JAVA]: javaLogo,
  [TechStack.SPRING]: springLogo,
  [TechStack.POSTGRESQL]: postgresqlLogo,
  [TechStack.MONGODB]: mongodbLogo,
  [TechStack.DOCKER]: dockerLogo,
  [TechStack.AWS]: awsLogo,
  [TechStack.GIT]: gitLogo,
  // Add default logo for other tech stacks
  [TechStack.REACT_DND]: reactLogo,
  [TechStack.REDUX]: reactLogo,
  [TechStack.MOBX]: reactLogo,
  [TechStack.REACT_ROUTER]: reactLogo,
  [TechStack.SCSS]: cssLogo,
  [TechStack.CSHARP]: javaLogo,
  [TechStack.DOTNET]: javaLogo,
  [TechStack.PHP]: nodeLogo,
  [TechStack.LARAVEL]: nodeLogo,
  [TechStack.RUBY]: nodeLogo,
  [TechStack.RAILS]: nodeLogo,
  [TechStack.GO]: nodeLogo,
  [TechStack.RUST]: nodeLogo,
  [TechStack.CPP]: nodeLogo,
  [TechStack.MYSQL]: postgresqlLogo,
  [TechStack.REDIS]: postgresqlLogo,
  [TechStack.SQLITE]: postgresqlLogo,
  [TechStack.FIREBASE]: awsLogo,
  [TechStack.FIRESTORE]: awsLogo,
  [TechStack.DYNAMODB]: awsLogo,
  [TechStack.ELASTICSEARCH]: awsLogo,
  [TechStack.AZURE]: awsLogo,
  [TechStack.GCP]: awsLogo,
  [TechStack.KUBERNETES]: dockerLogo,
  [TechStack.JENKINS]: dockerLogo,
  [TechStack.GITHUB_ACTIONS]: gitLogo,
  [TechStack.GITLAB_CI]: gitLogo,
  [TechStack.TERRAFORM]: awsLogo,
  [TechStack.ANSIBLE]: awsLogo,
  [TechStack.REST_API]: nodeLogo,
  [TechStack.GRAPHQL]: nodeLogo,
  [TechStack.STRIPE_API]: nodeLogo,
  [TechStack.WEATHER_API]: nodeLogo,
  [TechStack.GOOGLE_MAPS]: awsLogo,
  [TechStack.FIREBASE_AUTH]: awsLogo,
  [TechStack.D3_JS]: javascriptLogo,
  [TechStack.CHART_JS]: javascriptLogo,
  [TechStack.TENSORFLOW]: pythonLogo,
  [TechStack.PYTORCH]: pythonLogo,
  [TechStack.PANDAS]: pythonLogo,
  [TechStack.NUMPY]: pythonLogo,
  [TechStack.WEBPACK]: nodeLogo,
  [TechStack.VITE]: nodeLogo,
  [TechStack.BABEL]: nodeLogo,
  [TechStack.ESLINT]: nodeLogo,
  [TechStack.PRETTIER]: nodeLogo,
  [TechStack.JEST]: javascriptLogo,
  [TechStack.CYPRESS]: javascriptLogo,
  [TechStack.PLAYWRIGHT]: javascriptLogo,
  [TechStack.STORYBOOK]: reactLogo,
  [TechStack.PROMETHEUS]: dockerLogo,
  [TechStack.GRAFANA]: dockerLogo,
  [TechStack.SENTRY]: awsLogo,
  [TechStack.GOOGLE_ANALYTICS]: awsLogo,
  [TechStack.JWT]: nodeLogo,
  [TechStack.OAUTH]: nodeLogo,
  [TechStack.PASSPORT]: nodeLogo,
  [TechStack.BCRYPT]: nodeLogo,
};

interface TechStackCarouselProps {
  techStacks: TechStack[];
}

const TechStackCarousel: React.FC<TechStackCarouselProps> = ({ techStacks }) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        py: 4,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          width: '100px',
          height: '100%',
          zIndex: 2,
        },
        '&::before': {
          left: 0,
          background: 'linear-gradient(to right, #ffffff, transparent)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #ffffff, transparent)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: 'scroll 40s linear infinite',
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(calc(-150px * ' + techStacks.length + '))',
            },
          },
        }}
      >
        {/* First set of items */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            px: 2,
          }}
        >
          {techStacks.map((tech, index) => (
            <Box
              key={`${tech}-${index}`}
              sx={{
                minWidth: 150,
                height: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 0px 3px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box
                component="img"
                src={techStackLogos[tech]}
                alt={tech}
                sx={{
                  width: 64,
                  height: 64,
                  objectFit: 'contain',
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  textAlign: 'center',
                  px: 2,
                }}
              >
                {tech}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* Duplicate set for seamless scrolling */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            px: 2,
          }}
        >
          {techStacks.map((tech, index) => (
            <Box
              key={`${tech}-duplicate-${index}`}
              sx={{
                minWidth: 150,
                height: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 0px 3px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box
                component="img"
                src={techStackLogos[tech]}
                alt={tech}
                sx={{
                  width: 64,
                  height: 64,
                  objectFit: 'contain',
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  textAlign: 'center',
                  px: 2,
                }}
              >
                {tech}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TechStackCarousel; 