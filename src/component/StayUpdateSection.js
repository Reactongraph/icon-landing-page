import React from 'react'
import {Grid, Typography} from '@mui/material';
import { MainGrid } from './StaySectionStyle';

export default function StayUpdateSection() {
  return (
    <MainGrid>
      <Typography variant='h2' color="white">Stay updated</Typography>
      <Typography variant='p' color="white">Get occasional updates about the latest news, events, and special offers from Icon.</Typography>
    </MainGrid>
  )
}
