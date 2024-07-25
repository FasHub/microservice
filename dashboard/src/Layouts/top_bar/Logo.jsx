import logo from '@images/icon.png';

const Logo = () => {
  return (
    <div className="flex items-center justify-start h-full gap-2 w-[239px]">
      <img src={logo} className="h-[2.5rem] filter brightness-110" />
      <span className="text-xl font-normal text-content-1">INSA</span>
    </div>
  )
}

export default Logo