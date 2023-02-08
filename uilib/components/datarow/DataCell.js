import React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  padding: 0.5em 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: auto;
  margin-bottom: auto;
`

const DataCell = ({ children, ...props }) => {
  // const mouseEnter = (e) => {
  //   console.log(e)
  //   const text = e.target.innerText
  // }
  // onMouseEnter={mouseEnter} 

  return (
    <StyledDiv {...props}>{children}</StyledDiv>
  )
}

export default DataCell
