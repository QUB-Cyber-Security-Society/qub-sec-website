import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Chip,
  Paper,
  Snackbar,
  Alert,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  Terminal,
  CheckCircle,
  PlayArrow,
  EmojiEvents as Trophy,
  Lightbulb,
  Close as CloseIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface Quest {
  id: string;
  title: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  description: string;
  challenge: string;
  answer: string;
  hint: string;
  points: number;
}

// Custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(18, 18, 18, 0.9)',
  border: `1px solid ${theme.palette.success.dark}`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'none',
    boxShadow: 'none'
  }
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.75rem'
}));

const ChallengeBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.success.dark}`,
  padding: '16px',
  borderRadius: theme.shape.borderRadius,
  '& code': {
    color: theme.palette.success.main,
    fontFamily: theme.typography.fontFamily,
    wordBreak: 'break-all'
  }
}));

export function Lab() {
  // State management
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(new Set());
  const [showHints, setShowHints] = useState<Set<string>>(new Set());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const quests: Quest[] = [
    {
      id: '1',
      title: 'Caesar Cipher',
      difficulty: 'EASY',
      description: 'Decode this simple substitution cipher where each letter is shifted by a fixed number.',
      challenge: 'FDHVDU FLSKHU',
      answer: 'CAESAR CIPHER',
      hint: 'Try shifting each letter by 3 positions backwards in the alphabet.',
      points: 100
    },
    {
      id: '2',
      title: 'Binary Message',
      difficulty: 'EASY',
      description: 'Convert this binary message to ASCII text.',
      challenge: '01001000 01000101 01001100 01001100 01001111',
      answer: 'HELLO',
      hint: '8 bits = 1 byte = 1 ASCII character',
      points: 150
    },
    {
      id: '3',
      title: 'Base64 Decoder',
      difficulty: 'MEDIUM',
      description: 'Decode this Base64 encoded message.',
      challenge: 'U0VDVVJJVFk=',
      answer: 'SECURITY',
      hint: 'Base64 uses A-Z, a-z, 0-9, +, / and = for padding',
      points: 200
    },
    {
      id: '4',
      title: 'ROT13 Cipher',
      difficulty: 'EASY',
      description: 'Decode this ROT13 encrypted message.',
      challenge: 'PLORE FRPHEVGL',
      answer: 'CYBER SECURITY',
      hint: 'ROT13 shifts each letter by 13 positions in the alphabet.',
      points: 120
    }
  ];

  const handleAnswerSubmit = (questId: string) => {
    const quest = quests.find(q => q.id === questId);
    const userAnswer = answers[questId]?.toUpperCase().trim();
    
    if (quest && userAnswer === quest.answer) {
      setCompletedQuests(prev => new Set([...prev, questId]));
    } else {
      setErrorMessage('Incorrect answer. Try again!');
    }
    
    setAnswers(prev => ({
      ...prev,
      [questId]: ''
    }));
  };

  const toggleHint = (questId: string) => {
    setShowHints(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questId)) {
        newSet.delete(questId);
      } else {
        newSet.add(questId);
      }
      return newSet;
    });
  };

  const totalPoints = Array.from(completedQuests).reduce((sum, questId) => {
    const quest = quests.find(q => q.id === questId);
    return sum + (quest?.points || 0);
  }, 0);

  const getDifficultyColor = (difficulty: Quest['difficulty']) => {
    switch (difficulty) {
      case 'EASY': return { bg: '#4caf5033', text: '#4caf50', border: '#4caf5066' };
      case 'MEDIUM': return { bg: '#ffeb3b33', text: '#ffeb3b', border: '#ffeb3b66' };
      case 'HARD': return { bg: '#f4433633', text: '#f44336', border: '#f4433666' };
    }
  };

  return (
    <Box
      component="section"
      id="lab"
      sx={{
        py: 10,
        position: 'relative',
        bgcolor: 'black',
        overflow: 'hidden'
      }}
    >
      {/* Background image would go here */}
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" component="h2" 
              sx={(theme) => ({ 
                fontFamily: theme.typography.fontFamily, 
                color: theme.palette.success.main,
                mb: 2 
              })}
            >
              {'< CYBER_LAB />'}
            </Typography>
            
            <Typography variant="h6" component="p" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                mb: 3
              }}
            >
              Test your cybersecurity skills with our interactive challenges and quests.
            </Typography>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 3,
                  py: 1.5,
                  bgcolor: 'rgba(76, 175, 80, 0.1)',
                  border: '1px solid rgba(76, 175, 80, 0.3)'
                }}
              >
                <Trophy sx={{ color: '#4caf50' }} />
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'monospace', color: '#4caf50' }}
                >
                  TOTAL SCORE: {totalPoints} POINTS
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', fontFamily: 'monospace' }}
                >
                  ({completedQuests.size}/{quests.length} COMPLETED)
                </Typography>
              </Paper>
            </motion.div>
          </Box>
        </motion.div>

        <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
            width: '100%',
            '& > div': {
              display: 'flex',
              width: '100%'
            },
            '& > div > div': {
              width: '100%',
              '& > .MuiCard-root': {
                width: '100%'
              }
            }
          }}>
          {quests.map((quest, index) => {
            const isCompleted = completedQuests.has(quest.id);
            const showHint = showHints.has(quest.id);
            const userAnswer = answers[quest.id] || '';
            const difficultyColor = getDifficultyColor(quest.difficulty);

            return (
              <Box key={quest.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StyledCard 
                    sx={{
                      ...(isCompleted && {
                        boxShadow: `0 0 0 2px rgba(76, 175, 80, 0.5)`
                      })
                    }}
                  >
                    <CardHeader
                      title={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Terminal fontSize="small" sx={{ color: '#4caf50' }} />
                          <Typography variant="h6" sx={{ fontFamily: 'monospace', color: '#4caf50' }}>
                            {quest.title}
                          </Typography>
                          {isCompleted && (
                            <CheckCircle fontSize="small" sx={{ color: '#4caf50' }} />
                          )}
                        </Box>
                      }
                      action={
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <StyledChip
                            label={quest.difficulty}
                            sx={{
                              backgroundColor: difficultyColor.bg,
                              color: difficultyColor.text,
                              borderColor: difficultyColor.border
                            }}
                            variant="outlined"
                          />
                          <StyledChip
                            label={`${quest.points}pts`}
                            sx={{
                              backgroundColor: 'transparent',
                              color: '#4caf50',
                              borderColor: 'rgba(76, 175, 80, 0.4)'
                            }}
                            variant="outlined"
                          />
                        </Box>
                      }
                    />
                    
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {quest.description}
                      </Typography>
                      
                      <ChallengeBox>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <PlayArrow fontSize="small" sx={{ color: '#4caf50' }} />
                          <Typography variant="caption" sx={{ color: '#4caf50', fontFamily: 'monospace' }}>
                            CHALLENGE:
                          </Typography>
                        </Box>
                        <code>{quest.challenge}</code>
                      </ChallengeBox>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <TextField
                            fullWidth
                            placeholder="Enter your answer..."
                            value={userAnswer}
                            onChange={(e) => setAnswers(prev => ({
                              ...prev,
                              [quest.id]: e.target.value
                            }))}
                            disabled={isCompleted}
                            InputProps={{
                              endAdornment: userAnswer ? (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="clear input"
                                    onClick={() => setAnswers(prev => ({
                                      ...prev,
                                      [quest.id]: ''
                                    }))}
                                    edge="end"
                                    size="small"
                                    sx={{
                                      color: '#4caf50',
                                      '&:hover': {
                                        color: '#45a049'
                                      }
                                    }}
                                  >
                                    <CloseIcon />
                                  </IconButton>
                                </InputAdornment>
                              ) : null
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                color: '#4caf50',
                                fontFamily: 'monospace',
                                bgcolor: 'rgba(0, 0, 0, 0.3)',
                                '& fieldset': {
                                  borderColor: 'rgba(76, 175, 80, 0.3)'
                                },
                                '&:hover fieldset': {
                                  borderColor: 'rgba(76, 175, 80, 0.5)'
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#4caf50'
                                }
                              }
                            }}
                          />
                          <Button
                            variant="contained"
                            onClick={() => handleAnswerSubmit(quest.id)}
                            disabled={isCompleted || !userAnswer.trim()}
                            sx={{
                              bgcolor: '#4caf50',
                              color: 'black',
                              fontFamily: 'monospace',
                              opacity: !userAnswer.trim() && !isCompleted ? 0.5 : 1,
                              transition: 'opacity 0.2s',
                              '&:hover': {
                                bgcolor: '#45a049'
                              },
                              '&.Mui-disabled': {
                                bgcolor: 'rgba(76, 175, 80, 0.3)',
                                color: 'rgba(0, 0, 0, 0.5)'
                              }
                            }}
                          >
                            {isCompleted ? <CheckCircle /> : 'SUBMIT'}
                          </Button>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => toggleHint(quest.id)}
                            startIcon={<Lightbulb />}
                            sx={{
                              color: '#ffeb3b',
                              borderColor: 'rgba(255, 235, 59, 0.4)',
                              '&:hover': {
                                borderColor: 'rgba(255, 235, 59, 0.8)',
                                bgcolor: 'rgba(255, 235, 59, 0.1)'
                              },
                              fontFamily: 'monospace'
                            }}
                          >
                            {showHint ? 'HIDE HINT' : 'SHOW HINT'}
                          </Button>
                          
                          {isCompleted && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#4caf50' }}>
                                <CheckCircle fontSize="small" />
                                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                  COMPLETED!
                                </Typography>
                              </Box>
                            </motion.div>
                          )}
                        </Box>

                        {showHint && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                          >
                            <Paper
                              sx={{
                                p: 2,
                                bgcolor: 'rgba(255, 235, 59, 0.1)',
                                border: '1px solid rgba(255, 235, 59, 0.3)'
                              }}
                            >
                              <Typography variant="body2" sx={{ color: '#ffeb3b' }}>
                                <strong>HINT:</strong> {quest.hint}
                              </Typography>
                            </Paper>
                          </motion.div>
                        )}
                      </Box>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Box>
            );
          })}
        </Box>

        {completedQuests.size === quests.length && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <Paper
              sx={{
                maxWidth: 400,
                mx: 'auto',
                p: 4,
                bgcolor: 'rgba(76, 175, 80, 0.1)',
                border: '1px solid rgba(76, 175, 80, 0.3)'
              }}
            >
              <Trophy sx={{ fontSize: 48, color: '#4caf50', mb: 2 }} />
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'monospace',
                  color: '#4caf50',
                  mb: 1
                }}
              >
                MISSION COMPLETE!
              </Typography>
              <Typography color="text.secondary" paragraph>
                You've successfully completed all cyber quests!
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'monospace',
                  color: '#4caf50',
                  mt: 2
                }}
              >
                FINAL SCORE: {totalPoints} POINTS
              </Typography>
            </Paper>
          </motion.div>
        )}
        
        <Snackbar
          open={errorMessage !== null}
          autoHideDuration={3000}
          onClose={() => setErrorMessage(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setErrorMessage(null)}
            severity="error"
            sx={{ width: '100%' }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}