import React from 'react'
import styled from '@emotion/styled'

import { Stack } from '@mui/material'

const StyledStack = styled(Stack)`
  font-weight: bold;
`

const DataHead = ({ children, ...props }) => {
  return <StyledStack className='DataHead' direction='row' {...props}>{children}</StyledStack>
}

export default DataHead
