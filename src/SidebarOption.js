
import "./SidebarOption.css";

function SidebarOption({ title, Icon }) { //here the Icon is going to be a component

    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{ title }</h4> : <p>{ title }</p>}
        </div>
    )
}



export default SidebarOption;