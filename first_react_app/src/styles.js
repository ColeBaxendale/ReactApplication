import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=> ({
    root: {
        height: '100vh' // makes full screen application 
    },

    image:{
        backgroundImage: 'url(https://picsum.photos/1920/1080?random=1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },

    paper:{
        margin: theme.spacing(8,4),
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
    },

    avatar:{
        margin:theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },

    form:{
        width:'100%', marginTop:theme.spacing(1)
    },

    submit:{
        margin:theme.spacing(3,0,2),
        backgroundColor: theme.palette.primary.main
    }



}))