import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat'
    ].join(',')
  }
})

const CustomButton = styled(Button)`
  background-color: rgb(0, 37, 255);
  color: white;
  &:hover {
    background-color: rgb(0, 24, 164);
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 210 }}
        image="./Technigo-logo-new.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Technigo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hello 👋 We help you get a career you love ❤️. Learn digital skills with creative people.
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton variant="contained">Share</CustomButton>
        <Button variant="outlined">Learn More</Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  )
}

export default App
