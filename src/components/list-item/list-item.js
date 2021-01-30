import React from 'react'
import styled from 'styled-components'

export const List = styled.ul`
  padding: 1.1rem;
  background-color: ${props => props.theme.color.bgColorLight};
  border-radius: 5px;
`
const ListItemIcon = styled.span`
  padding-right: 1rem;
`
const ListItemContainer = styled.li`
  padding: 0.5rem;
`

export const ListItem = ({ icon, iconLabel, children }) => (
  <ListItemContainer>
    <ListItemIcon role="img" aria-label={iconLabel}>
      {icon}
    </ListItemIcon>
    <span>{children}</span>
  </ListItemContainer>
)
