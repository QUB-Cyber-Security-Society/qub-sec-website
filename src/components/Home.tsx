import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Security as ShieldIcon, Lock as LockIcon } from '@mui/icons-material';
import { Box, Button, Container, Typography, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledSection = styled('section')({
  minHeight: '100vh',
  backgroundColor: 'black',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
});

const BackgroundImage = styled(Box)({
  position: 'absolute',
  inset: 0,
  opacity: 0.1,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const TerminalWindow = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.success.dark}`,
  overflow: 'hidden',
  boxShadow: theme.shadows[20],
}));

const TerminalHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const DotButton = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: bgcolor,
}));

export const Home: React.FC = () => {
  const theme = useTheme();

  
  const floatingIcons = [
    { icon: TerminalIcon, delay: 0 },
    { icon: ShieldIcon, delay: 0.2 },
    { icon: LockIcon, delay: 0.4 },
  ];

  return (
    <StyledSection id="home">
      <BackgroundImage>
        <img
          src="https://images.unsplash.com/photo-1606606767399-01e271823a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwY29kZSUyMG1hdHJpeHxlbnwxfHx8fDE3NTc5NjA3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cybersecurity background"
        />
      </BackgroundImage>

      {floatingIcons.map(({ icon: Icon, delay }, index) => (
        <Box
          component={motion.div}
          key={index}
          sx={{
            position: 'absolute',
            left: `${20 + index * 25}%`,
            top: `${30 + index * 15}%`,
            color: theme.palette.success.light,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon sx={{ fontSize: 96 }} />
        </Box>
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          <Box>
            <Box
              component={motion.div}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
            >
              <Box
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'monospace',
                    color: theme.palette.success.light,
                    letterSpacing: 1,
                    mb: 2,
                  }}
                >
                  QUB Cyber
                  <br />
                  <Box component="span" sx={{ color: 'white' }}>
                    Security Society
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.grey[300], maxWidth: 500 }}
                >
                  Defending the digital frontier. Join Queen's University Belfast's premier cybersecurity community.
                </Typography>
              </Box>

              <Box
                component={motion.div}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                sx={{ display: 'flex', gap: 2 }}
              >
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{
                    fontFamily: 'monospace',
                    letterSpacing: 1,
                    px: 4,
                  }}
                >
                  JOIN US
                </Button>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              component={motion.div}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TerminalWindow>
                <TerminalHeader>
                  <DotButton bgcolor="#ff5f57" />
                  <DotButton bgcolor="#febc2e" />
                  <DotButton bgcolor="#28c840" />
                  <Typography
                    variant="caption"
                    sx={{
                      ml: 2,
                      color: theme.palette.grey[400],
                      fontFamily: 'monospace',
                    }}
                  >
                    cyber-terminal
                  </Typography>
                </TerminalHeader>
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box
                      component={motion.div}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1 }}
                      sx={{ overflow: 'hidden' }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: 'monospace', color: theme.palette.success.light }}
                      >
                        <Box component="span" sx={{ color: theme.palette.grey[500] }}>
                          $
                        </Box>{' '}
                        whoami
                      </Typography>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: 'monospace', color: theme.palette.success.light }}
                      >
                        cyber_sec_society_member
                      </Typography>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 2.5 }}
                      sx={{ overflow: 'hidden' }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: 'monospace', color: theme.palette.success.light }}
                      >
                        <Box component="span" sx={{ color: theme.palette.grey[500] }}>
                          $
                        </Box>{' '}
                        ls -la skills/
                      </Typography>
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.5 }}
                      sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}
                    >
                      {['penetration_testing', 'digital_forensics', 'network_security', 'cryptography'].map(
                        (skill) => (
                          <Typography
                            key={skill}
                            variant="body2"
                            sx={{ fontFamily: 'monospace', color: theme.palette.success.light }}
                          >
                            drwxr-xr-x {skill}
                          </Typography>
                        )
                      )}
                    </Box>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4.5 }}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: 'monospace', color: theme.palette.grey[500] }}
                      >
                        $
                      </Typography>
                      <Box
                        component={motion.div}
                        sx={{
                          width: 8,
                          height: 16,
                          backgroundColor: theme.palette.success.light,
                          ml: 1,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </TerminalWindow>
            </Box>
          </Box>
        </Box>
      </Container>
    </StyledSection>
  );
};
