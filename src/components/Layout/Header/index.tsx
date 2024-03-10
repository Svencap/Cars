import Container from "@/components/UI/Container";
import { Box, Stack } from "@mui/material";
function Header() {
  return (
    <Box
      bgcolor="primary.main"
      width="100%"
      height={{
        xs: "64px",
        xl: "74px",
      }}
      borderBottom="1px solid"
      borderColor="brand.brand90"
    >
      <Container>
        <Stack
          width="100%"
          height="100%"
          direction="row"
          alignItems="center"
          gap="10px"
          justifyContent="flex-end"
        >
          <Box
            display="flex"
            alignItems="center"
            height="100%"
            justifyContent="flex-end"
          ></Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
