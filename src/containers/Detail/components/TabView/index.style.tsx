import MaterialCard from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
  flex-grow: 1;
`
export const Card = styled(MaterialCard)`
  margin: 1rem;
  height: 200px;
  overflow: scroll;
`
export const TabContainer = styled.div`
  position: relative;
  top: 5%;
`
