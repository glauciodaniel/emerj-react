import {
    Home,
    Info,
    School,
    ContactMail,
    CalendarToday,
    People
} from '@mui/icons-material';


export const menu = [
    {
        id: 0,
        label:"Home",
        link:"/",
        icon: <Home />
    },{
        id: 1,
        label:"Quem Somos",
        link:"/about",
        icon: <Info />
    },{
        id: 2,
        label:"Cursos",
        link:"/courses",
        icon: <School />,
    },{
        id: 3,
        label:"Cursos Agendados",
        link:"/courses-schedules",
        icon: <CalendarToday />,
    },{
        id: 4,
        label:"Contato",
        link:"/contact",
        icon: <ContactMail />,
    },{
        id: 5,
        label:"Usuários",
        link:"/users",
        icon: <People />,
    },
]