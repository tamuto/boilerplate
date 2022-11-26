import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles'
import { 
  Container,
  CssBaseline
} from '@mui/material'

import Menu from './components/Menu'
import Unsplash from './components/Unsplash'

const theme = createTheme()

root = createRoot(document.getElementById('app'))
root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Container>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/unsplash' element={<Unsplash />} />
          </Routes>
        </HashRouter>
      </Container>
    </ThemeProvider>
  </>
)
