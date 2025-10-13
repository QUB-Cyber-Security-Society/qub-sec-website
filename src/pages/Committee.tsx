import { motion } from 'framer-motion';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CommitteeContainer from '../components/committee/commitee-container';

interface CommitteeMember {
  name: string;
  role: string;
  image: string;
  funFact: string;
}

export const Committee: React.FC = () => {
  const MotionBox = styled(motion.div)({});

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
          <Typography variant="h6" sx={{ maxWidth: '850px', mx: 'auto' }}>
            Our dedicated committee members are passionate about cybersecurity and committed to fostering a vibrant community.
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Get to know the team driving our society forward!
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
            <CommitteeContainer key={member.name} {...member} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
