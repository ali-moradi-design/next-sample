import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@/components/shared/Link/Link';
import { useRouter } from 'next/router';

export default function Home(props: any) {
  console.log(props);
  const router = useRouter();

  console.log(router);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          منانختمکو{' '}
        </Typography>
        {/* <Button
          component={Link}
          href="/about"
          color="primary"
          variant="contained"
        >
          Go to the about page
        </Button> */}
      </Box>
    </Container>
  );
}
