import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyCard from './myCard';
import JavaIcon from './Icons/java.svg';
import Background from './Images/background.jpg';
import Background1 from './Images/background1.jpg';
import CppIcon from './cpp.png';
import Alert from 'react-bootstrap/Alert'
import Avatar from 'avataaars';
import ReactIcon from './Icons/react.svg';
import SqlIcon from './Icons/sql.png';
import NetIcon from './Icons/dotnet.svg';
import QtIcon from './Icons/Qt.svg';
import LinuxIcon from './Icons/Linux.svg';
import MaterialIcon from './Icons/material.png';
import JavascriptIcon from './Icons/javascript.png';




       const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
  
}));

var style = {
  backgroundColor: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "relative",
  left: "0",
  bottom: "0",
  height: "10%",
  width: "100%",
  paddingTop: "30vh",
};

var background1style = {
linearGradient: '126,213,111,0.8'

};



export default function Home() {
  const classes = useStyles();
  let java = require('./Icons/java.svg');

  

  return (
    <>
    

     <Alert variant="warning">
          <Alert variant="warning" style={{width:'60%', float: 'left  '}}>
  <Alert.Heading>Witaj!</Alert.Heading>

  <p>
    Jeśli w moim życiu pojawiły się ostatnio jakieś duże zmiany, dowiedziałem się czegoś ciekawego i chcę się z tym podzielić pod spodem
    zobaczysz o tym informację. 

  </p>
  <hr />
  <p className="mb-0">
  Zaglądnij też na mój blog tutaj:   </p>

  <Alert.Link href="https://szelma139.github.io/">Tutaj</Alert.Link>. No dalej kliknij go!
  </Alert>
     
  <div style = {{  borderRadius:'10px',borderCollapse: 'collapsed'}}>

  <Avatar
  style={{float:'right'}}
  avatarStyle='Circle'
  topType='ShortHairShortWaved'
  accessoriesType='Prescription02'
  hairColor='BlondeGolden'
  facialHairType='Blank'
  clotheType='Hoodie'
  clotheColor='Gray01'
  eyeType='WinkWacky'
  eyebrowType='UpDown'
  mouthType='Twinkle'
  skinColor='Light'
/>
</div>
</Alert>
<div className="container">
  
    <div>
      <Grid container spacing={6}>  

        <Grid item xs={4} >
        <MyCard name={'c++'} path={CppIcon} tekst={'Konstrukcja programów desktopowych'}/>

             </Grid>
        <Grid item xs={4}>
        <MyCard name={'Java'} path={JavaIcon} tekst={'JavaFx i Swing'}/>

        </Grid>
        <Grid item xs={4} >
        <MyCard name={'C#'} path={NetIcon} tekst={'Platfroma .NET'}/>

        </Grid>
      </Grid>

      <Grid container spacing={6}>  
        <Grid item xs={12}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Grid>
</Grid>


<Grid container spacing={6}>  
  
  <Grid item xs={4} >
  <MyCard name={'SQL'} path={SqlIcon} tekst={'Konstrukcja programów desktopowych'}/>

       </Grid>
  <Grid item xs={4}>
  <MyCard name={'QT'} path={QtIcon} tekst={'Qt Framework w wersji 5'}/>

  </Grid>
  <Grid item xs={4}>
  <MyCard name={'Linux'} path={LinuxIcon} tekst={'Nie tylko ubuntu!'}/>

  </Grid>
</Grid>

<Grid container spacing={6}>  
  
  <Grid item xs={4} >
  <MyCard name={'React'} path={ReactIcon} tekst={'Konstrukcja programów desktopowych'}/>

       </Grid>
  <Grid item xs={4}>
  <MyCard name={'Javascript'} path={JavascriptIcon} tekst={'Aplikacje klienckie oraz backendowe'}/>

  </Grid>
  <Grid item xs={4}>
  <MyCard name={'Material-UI'} path={MaterialIcon} tekst={'Budowa interfejsów frontendowych'}/>

  </Grid>
</Grid>


<Grid container spacing={6}>  
  <Grid item xs={12}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Grid>
</Grid>

    </div>
    </div>
    </>
    
        )
    }

