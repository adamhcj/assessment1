import { CardContent } from '@mui/material';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import LeafletMap from './LeafletMap';


  
let theme = createTheme();
theme = responsiveFontSizes(theme);

function User(passedUser) {

    const user = passedUser.passedUser;

    let sampleUser = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    }

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    id: {user.id}
                </Typography>
                <div style={{display:'flex', flexDirection : 'row', justifyContent:'space-evenly'}}>
                    <div className='userCardSubSection'>
                        <Typography variant="h5" component="div">
                            Details
                        </Typography>
                        
                        <div className='userCardSubSection2'>
                            <Typography variant="body2">
                                name: {user.name}
                            </Typography>
                            <Typography variant="body2">
                                username: {user.username}
                            </Typography>
                            <Typography variant="body2">
                                email: {user.email}
                            </Typography>
                            <Typography variant="body2">
                                phone: {user.phone}
                            </Typography>
                            <Typography variant="body2">
                                website: {user.website}
                            </Typography>
                        </div>
                    </div>

                    <div className='userCardSubSection'>
                        <Typography variant="h5" component="div">
                            company
                        </Typography>
                        <div className='userCardSubSection2'>
                            <Typography variant="body2">
                                name: {user.company.name}
                            </Typography>
                            <Typography variant="body2">
                                catchPhrase: {user.company.catchPhrase}
                            </Typography>
                            <Typography variant="body2">
                                bs: {user.company.bs}
                            </Typography>
                        </div>

                    </div>

                    <div className='userCardSubSection'>
                        <Typography variant="h5" component="div">
                            address
                        </Typography>
                        <div className='userCardSubSection2'>
                            <Typography variant="body2">
                                street: {user.address.street}
                            </Typography>
                            <Typography variant="body2">
                                suite: {user.address.suite}
                            </Typography>
                            <Typography variant="body2">
                                city: {user.address.city}
                            </Typography>
                            <Typography variant="body2">
                                zipcode: {user.address.zipcode}
                            </Typography>
                            <Typography variant="body2">
                                geo: <br />
                                lat:{user.address.geo.lat} <br />
                                lng:{user.address.geo.lng}
                            </Typography>
                        </div>
                    </div>

                    <div className='userCardSubSection'>
                        <LeafletMap passedlatlng={user.address.geo} />
                    </div>
                </div>
                
            </CardContent>
        </React.Fragment>
    )

  return (
    <Box sx={{ minWidth: 275 }}>
        <ThemeProvider theme={theme}>
            <Card variant="outlined">{card}</Card>
        </ThemeProvider>

        

    </Box>
    
  );
}

export default User;