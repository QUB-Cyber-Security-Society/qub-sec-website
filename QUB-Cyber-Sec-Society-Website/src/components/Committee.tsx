import { motion } from 'framer-motion';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface CommitteeMember {
  name: string;
  role: string;
  image: string;
  funFact: string;
}

const MotionBox = styled(motion.div)({});

export const Committee: React.FC = () => {
  const members: CommitteeMember[] = [
    {
      name: "Caolan Maguire",
      role: "President",
      image: "caolan-maguire.png",
      funFact: "Has a certification in cyber security"
    },
    {
      name: "Priyal Gupta",
      role: "Secretary",
      image: "priyal-gupta.png",
      funFact: "The president of the Robotics society"
    },
    {
      name: "Jake Turner",
      role: "Treasurer",
      image: "jake-turner.png",
      funFact: "Has a certification in cyber security and AWS cloud computing"
    }
  ];

  return (
    <Box
      component="section"
      id="committee"
      sx={{
        py: 10,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg" className="committee-container">
        <MotionBox
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography variant="h2" sx={{ mb: 2 }}>
            {'< MEET_THE_COMMITTEE />'}
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Our dedicated team of cybersecurity experts leading the charge in digital defense education.
          </Typography>
        </MotionBox>

        <Grid 
          container 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%',
            margin: '0 auto'
          }}
        >
          {members.map((member, index) => (
            <Grid 
              key={member.name} 
              sx={{ 
                flex: { xs: '1', sm: '1', md: '1 1 calc(33.333% - 32px)' },
                minWidth: 0
              }}
            >
              <MotionBox
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ position: 'relative', overflow: 'hidden', minHeight: 400 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ position: 'relative', mb: 4 }}>
                      <Avatar
                        src={member.image}
                        alt={member.name}
                      />
                    </Box>
                    
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ mb: 3 }}>
                        {member.role.toUpperCase()}
                      </Typography>
                    </Box>
                  </CardContent>

                  <Box
                    sx={(theme) => ({
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 3,
                      opacity: 0,
                      transition: theme.transitions.create('opacity', {
                        duration: theme.transitions.duration.short
                      }),
                      '&:hover': {
                        opacity: 1
                      }
                    })}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic', 
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                      }}
                    >
                      "{member.funFact}"
                    </Typography>
                  </Box>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
