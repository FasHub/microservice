import Logo from './Logo';
import PageTitle from './PageTitle';
import Info from './Info';

function TopBar() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 mx-7 mt-3 h-[65px] rounded-xl bg-appColor-2 text-6xl z-[999]"></div>
      <div className="absolute top-0 left-0 right-0 mx-3 my-5 h-[65px] rounded-xl bg-appColor-1 text-6xl z-[999] shadow-md shadow-appColor-2">
        <div className="flex items-center justify-between h-full px-6">
          <div className="grid h-full grid-cols-2 divide-x divide-appColor-4">
            <Logo />
            <PageTitle />
          </div>
          <Info />
        </div>
      </div>
    </>
  );
}

export default TopBar;
