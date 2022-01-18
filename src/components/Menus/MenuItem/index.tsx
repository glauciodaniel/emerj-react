

interface Item { 
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
                <li>{item?.icon} {item.label}</li>
            ))}
        </ul>
    )
}