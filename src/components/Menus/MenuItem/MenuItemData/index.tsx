import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
export const menu = [
    {
        label:"Home",
        link:"/",
        icon: <HomeIcon />
    },{
        label:"Quem Somos",
        link:"/about",
        icon: <InfoIcon />
    },{
        label:"Cursos",
        link:"/courses",
        icon: <SchoolIcon />,
    },{
        label:"Contato",
        link:"/contact",
        icon: <ContactMailIcon />,
    },
]