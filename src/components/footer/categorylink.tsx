import { Stack, Link as MuiLink, List, ListItemText, ListItem } from "@mui/material";

const Categorylink = () => {
  return (
    <Stack direction="row" justifyContent="space-around">
      <List >
        <ListItem >
          <ListItemText>
            Recently Events
          </ListItemText>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            repo
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            pull request
          </MuiLink>
        </ListItem>
        <ListItem >
          <MuiLink variant="subtitle2" href="#" color="text.primary">
            author: sudo3@gmail.com
          </MuiLink>
        </ListItem>
      </List>
    </Stack>
  )
}

export default Categorylink
