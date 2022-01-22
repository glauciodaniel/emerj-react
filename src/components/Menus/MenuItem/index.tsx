import { Link } from "react-router-dom";


// Uma Interface é uma forma de padronizar ou criar uma regra com os dados e seus tipos que serão utilizados.
interface Item { 
    id: number;
    label: string;
    link: string;
    icon?: JSX.Element;
}

interface ItemProps {
    linkProps: Item[];
}

export default function MenuItem({linkProps}:ItemProps){

    return (
        <ul>
            {linkProps.map((item:Item)=>(
                <li key={item.id}>
                    <Link to={item.link}>
                    {item?.icon} <span className="label">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}