import React from 'react'
import styled from '@emotion/styled'

import { Stack } from '@mui/material'

const StyledStack = styled(Stack)`
`

const DataRow = ({ children, ...props }) => {
  return <StyledStack className='DataRow' direction='row' {...props}>{children}</StyledStack>
}

export default DataRow
