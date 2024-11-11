import { Grid2, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import ContactForm from '../../forms/ContactForm';

const FillTheFormCard = () => {
  const theme = useTheme();

  return (
    <Grid2
      container
      spacing='1rem'
      padding='2rem'
      borderRadius='1rem'
      direction={'column'}
      sx={{
        width: '100%',
        height: '100%',
        border: `0.25rem solid ${theme.palette.primary.hover2}`,
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          border: `0.25rem solid ${theme.palette.background.default}`,
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
          transform: 'translateY(-0.25rem)',
          transition: 'all 0.1s ease-in-out',
        },
      }}
    >
      <Grid2
        display='flex'
        size={'auto'}
        borderRadius={1}
        sx={{
          justifyContent: 'center',
          margin: '2rem',
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
          <Typography variant='h2' sx={{ fontWeight: 'regular' }}>
            Fill The Form
          </Typography>
          <Typography
            variant='code'
            sx={{ textAlign: 'center', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
          >
            To <span>get in touch</span> by mail
          </Typography>
        </Stack>
      </Grid2>
      <Grid2
        display='flex'
        size={'grow'}
        borderRadius={1}
        sx={{
          justifyContent: 'center',
        }}
      >
        <ContactForm />
      </Grid2>
    </Grid2>
  );
};

export default FillTheFormCard;