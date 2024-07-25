import Svg from "../../global-components/Svg";

const PageTitle = () => {
  return (
    <div className="flex items-center h-full gap-2 px-6">
      <span className="text-sm font-normal text-content-1/85">Dashboard</span>
      <Svg name="forward" styles="text-content-1/85 h-3 w-3" />
    </div>
  )
}

export default PageTitle