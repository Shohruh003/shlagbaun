import Button from '@mui/material/Button';
import './App.css';
import { Stack } from '@mui/material';
import axios from 'axios';

function App() {

  const OpenClick = () => {
    axios.post('https://00d0-81-95-239-4.ngrok-free.app/open')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error); 
  });
  }

  const StopClick = () => {
    axios.post('https://00d0-81-95-239-4.ngrok-free.app/stop')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error); 
  });
  }

  const CloseClick = () => {
    axios.post('https://00d0-81-95-239-4.ngrok-free.app/close')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error); 
  });
  }
  return (
    <div className="App">
      <Stack direction="row" spacing={2}>
      <Button onClick={OpenClick} sx={{fontSize: '32px', padding: "10px 30px", width: "300px"}} variant="contained" color="success">
        Open
      </Button>
      <Button onClick={CloseClick} sx={{fontSize: '32px', padding: "10px 30px", width: "300px"}} variant="contained" color="info">
        Close
      </Button>
      <Button onClick={StopClick} sx={{fontSize: '32px', padding: "10px 30px", width: "300px"}} variant="contained" color="error">
        Stop
      </Button>
    </Stack>
    </div>
  );
}

export default App;
