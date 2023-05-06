import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ErrorBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: "center",
  justifyContent: 'center',
  height: '100vh',
  background: theme.palette.background.default,
}));

const ErrorHeading = styled(Typography)({
  fontSize: 64,
  fontWeight: 700,
  marginBottom: 20,
});

const ErrorMessage = styled(Typography)({
  fontSize: 24,
  fontWeight: 500,
});

const NotFound = () => {
  return (
    <ErrorBox>
      <ErrorHeading>404</ErrorHeading>
      <ErrorMessage>
        Oops! The page you're looking for cannot be found.
      </ErrorMessage>
    </ErrorBox>
  );
};

export default NotFound;

