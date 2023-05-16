import { Stack, Link as MuiLink, List, ListItemText, ListItem } from "@mui/material";

const Categorylink = () => {
  return (
    <Stack direction="row" justifyContent="space-around">
      <List>
        <ListItem >
          <ListItemText>
            followers
          </ListItemText>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
      </List>
      <List>
        <ListItem >
          <ListItemText>
            products
          </ListItemText>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
      </List>
      <List>
        <ListItem >
          <ListItemText>
            products
          </ListItemText>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            products
          </MuiLink>
        </ListItem>
      </List>
    </Stack>
  )
}

export default Categorylink
