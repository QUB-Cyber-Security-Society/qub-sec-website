import { Box, Container, Grid } from '@mui/material';
import CommitteeContainer from '../components/committee/commitee-container';
import CommitteeHeader from '../components/committee/committee-header';

interface CommitteeMember {
  name: string;
  role: string;
  image: string;
  funFact: string;
}

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
        <CommitteeHeader />
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
