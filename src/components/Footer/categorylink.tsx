import { Stack, Link as MuiLink, List, ListItemText, ListItem } from "@mui/material";

// const data = {
//   product: ["shop", "mirch"],
//   company: ["jobs", "careear"],
//   social: ["facebook", "github"],
// }

const Categorylink = () => {
  return (
    <Stack direction="row" alignItems="flex-start" justifyContent="space-around">
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
