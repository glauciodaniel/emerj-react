import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';

export const menu = [
    {
        id: 0,
        label:"Home",
        link:"/",
        icon: <HomeIcon />
    },{
        id: 1,
        label:"Quem Somos",
        link:"/about",
        icon: <InfoIcon />
    },{
        id: 2,
        label:"Cursos",
        link:"/courses",
        icon: <SchoolIcon />,
    },{
        id: 3,
        label:"Cursos Agendados",
        link:"/courses-schedules",
        icon: <CalendarTodayIcon />,
    },{
        id: 4,
        label:"Contato",
        link:"/contact",
        icon: <ContactMailIcon />,
    },{
        id: 5,
        label:"Usuários",
        link:"/users",
        icon: <PeopleIcon />,
    },
]