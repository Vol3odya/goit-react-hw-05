import { NavLink } from "react-router-dom"
import { clsx } from "clsx"
import css from "./Navigation.module.css"

export default function Navigation({linkOne, nameOne, linkTwo, nameTwo}) {
  const getNavLinkClass = (props) => {
    return clsx(css.link, props.isActive && css.active);
  };
  return (
    <ul>
      <li>
        <NavLink to={linkOne} className={getNavLinkClass}>{nameOne}</NavLink>
      </li>
      <li>
        <NavLink to={linkTwo} className={getNavLinkClass}>{nameTwo}</NavLink>
      </li>
      
    </ul>
  )
}
