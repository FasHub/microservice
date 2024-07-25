import Svg from "../../global-components/Svg"
import PropTypes from 'prop-types';
import SubMenu from "./SubMenu";
import useSideBar from "../../contexts/useSelectedTheme";
import { NavLink } from "react-router-dom";

const Nav = ({ link, label, icon, subMenu }) => {
  Nav.propTypes = {
    link: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    subMenu: PropTypes.any,
  };
  
  const { selectedTheme } = useSideBar();

  const liStyle = (isActive) => { 
    return selectedTheme == 'dark' ? isActive ? `text-sm font-normal text-content-0 fill-content-0 stroke-content-0 tracking-wide flex cursor-pointer items-center laptop:justify-start mobile:justify-center gap-3 laptop:px-5 laptop:py-[0.9rem] mobile:px-3 mobile:py-[0.7rem] bg-appColor-5 rounded-2xl after:absolute after:-right-[8px] after:translate-y-1 after:content-[url('/svg/side_active_dark.svg')] shadow-appColor-1 laptop:w-full mobile:w-12`
      : "text-sm font-normal fill-content-2 stroke-content-2 text-content-2 flex cursor-pointer items-center laptop:justify-start mobile:justify-center gap-3 px-5 py-[0.9rem] laptop:w-full mobile:w-12"
      : isActive ? `text-sm font-normal text-content-0 fill-content-0 stroke-content-0 tracking-wide flex cursor-pointer items-center laptop:justify-start mobile:justify-center gap-3 laptop:px-5 laptop:py-[0.9rem] mobile:px-2 mobile:py-[0.7rem] bg-appColor-5 rounded-2xl after:absolute after:-right-[8px] after:translate-y-1 after:content-[url('/svg/side_active.svg')] shadow-appColor-1 laptop:w-full mobile:w-12`
                    : "text-sm font-normal fill-content-2 stroke-content-2 text-content-2 flex cursor-pointer items-center laptop:justify-start mobile:justify-center gap-3 px-5 py-[0.9rem] laptop:w-full mobile:w-12"
  }

  return (
    <ul className="p-0 m-0">
      {!subMenu.length ? <li className="flex items-center justify-center" title={label}>
        <NavLink to={link} className={({isActive}) => liStyle(isActive)}>
          {icon != null ? <Svg name={icon} styles="h-min w-min" /> : ""}
          <span className="laptop:block mobile:hidden">{label}</span>
        </NavLink>
      </li>
      : <SubMenu
            label={label}
            icon={icon} 
            subMenu={subMenu}
        />
      }
    </ul>
  )
}

export default Nav