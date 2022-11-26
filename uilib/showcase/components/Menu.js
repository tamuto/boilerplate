import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Stack
} from '@mui/material'

const Menu = () => {
  return (
    <Stack>
      <Button component={Link} to='/unsplash'>Unsplash</Button>
    </Stack>
  )
}

export default Menu
