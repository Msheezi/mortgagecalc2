
import './App.css';
import { CalcPage } from './components/calcPage';
import {AppBar, makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
  appbar: {
    textAlign: "center",
    height: "30px",
    lineHeight: "30px"
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
    <AppBar className={classes.appbar} position="fixed"> Mortagage Calculator
      
    </AppBar>
      <CalcPage/>
    </>
  );
}

export default App;
