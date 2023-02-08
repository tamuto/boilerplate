import styled from "@emotion/styled"

const DataTable = styled.div`
  & .DataHead {
    border-bottom: solid 2px grey;
    background-color: lightgrey;
  }

  & .DataRow {
    border-bottom: solid 1px grey;
  }

  & .DataRow:nth-of-type(odd) {
    background-color: #eeeeee;
  }
`

export default DataTable
