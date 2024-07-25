import { Disclosure } from '@headlessui/react';
import Svg from '../../global-components/Svg';
import PropTypes from 'prop-types';
import Nav from './Nav';

const SubMenu = ({ label, icon, subMenu }) => {
  SubMenu.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    subMenu: PropTypes.any,
  };
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            title={label}
            className="flex items-center laptop:justify-start mobile:justify-center w-full hover:bg-appColor-4/45 laptop:px-5 laptop:py-[0.9rem] mobile:px-3 mobile:py-[0.7rem] text-content-2 rounded-2xl  laptop:w-full mobile:w-12"
          >
            <span className="flex items-center justify-start w-full gap-3 cursor-pointer">
              {icon != null ? (
                <Svg
                  name={icon}
                  styles="laptop:h-6 laptop:w-6 mobile:h-5 mobile:w-5 fill-content-2 stroke-content-2"
                />
              ) : (
                ''
              )}
              <span className="text-sm font-normal tracking-wide laptop:block mobile:hidden">
                {label}
              </span>
            </span>
            {open ? (
              <Svg
                name="up"
                styles="laptop:block mobile:hidden w-2 h-2  fill-content-2 stroke-content-2 transition-all ease-in-out delay-300"
              />
            ) : (
              <Svg
                name="down"
                styles="laptop:block mobile:hidden w-2 h-2  fill-content-2 stroke-content-2 transition-all ease-in-out delay-300"
              />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="flex flex-col bg-appColor-4 rounded-xl laptop:w-full mobile:w-16">
            {subMenu.map((item, index) => {
              return (
                <Nav
                  key={index}
                  active={item.active}
                  link={item.href}
                  label={item.label}
                  icon={item.icon}
                  subMenu={item.subMenu}
                />
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default SubMenu;
