import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
        label:"Cursos Agendados",
        link:"/courses-schedules",
        icon: <CalendarTodayIcon />,
    },{
        label:"Contato",
        link:"/contact",
        icon: <ContactMailIcon />,
    },
]