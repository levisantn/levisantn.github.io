import { Grid2, Stack, Typography } from '@mui/material';

const MyProjectsCard = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='5rem'
        paddingBottom='2.5rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack
            direction='column'
            spacing={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                fontWeight: '600',
                fontSize: '3.5rem',
                wordSpacing: '-0.5rem',
                fontFamily: 'var(--mono-font)',
                color: 'primary.light',
              }}
            >
              My Projects
            </Typography>
            <Typography
              variant='h5'
              sx={{ textAlign: 'center', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
            >
              Here are a few project I&apos;ve worked on.
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default MyProjectsCard;