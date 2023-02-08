import React from 'react'
import styled from '@emotion/styled'

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  gap: 0 5px;
`

const DataHead = ({ children, ...props }) => {
  return <StyledStack className='DataHead' direction='row' {...props}>{children}</StyledStack>
}

export default DataHead
