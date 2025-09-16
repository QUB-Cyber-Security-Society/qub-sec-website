import { Grid, Box, Typography } from '@mui/material';

export function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        borderTop: '1px solid',
        borderColor: 'success.dark',
        py: 2,
      }}
    >
      <Grid sx={{ maxWidth: 'lg', mx: 'auto', px: 2 }}>
        {/* Bottom Bar */}
        <Grid item xs={12}>
            <Box
              sx={{
                borderColor: 'success.dark',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: 'grey.700', fontFamily: 'monospace' }}
              >
                © 2025 QUB Cyber Security Society. All rights reserved.
              </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}