import React from 'react'
import { createTheme,ThemeProvider } from '@mui/material'
import { Palette } from '@mui/icons-material';
import { grey,pink } from '@mui/material/colors';
const theme=createTheme({
    typography:{
        allVariants:{
            fontFamily:'Roboto Slab',
            textTransform:'none',
            fontSize:15,
        }
    },
       Palette  :{
        primary:{
            main:grey[700],
        },
        secondary:{
            main:pink[500],
        }
       },
       components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    px:1
                },variant:'subtitle2',
                texTransform:'capitalize',
            }
        }
       },MuiStack:{
        defaultProps:{
            sx:{
                px:2,
                py:1,
            },spacing:2,
            direction:'row',
        }
       },
       MuiPaper:{
        defaultProps:{
            elevation:0
        }
       },
       MuiLink:{
        sx:{
            color:theme=>theme.palette.primary.main
        },
        underline:'none'
       },
       MuiButton:{
        defaultProps:{
            size:'small',
            p:0,
            disableRipple:true
        },variant:'text',
       },
       MuiTab:{
        defaultProps:{
            disableRipple:true
        }
       }
    
});
const AppThemeProvider = (prop) => {
  return (
    <ThemeProvider theme={theme} >
        {prop.children}
    </ThemeProvider>
  )
};

export default AppThemeProvider


//themprovider accept a property called theme
// line 6 createThem is function that accept configuration object
//  line 23 defaultprops means it will apply to all typography without writing for each one
// line 47 refer within theme object
// line 55 click effect is disable

