import React from 'react'
import styled from '@emotion/styled'

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 5px;
`

const DataRow = ({ children, ...props }) => {
  return <StyledStack className='DataRow' direction='row' {...props}>{children}</StyledStack>
}

export default DataRow
