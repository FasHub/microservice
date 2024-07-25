import { Svg } from "@/global-components";
import { useState } from "react";
import useSideBar from "../contexts/useSelectedTheme";

const Theme = () => {
  const { selectedTheme, setSelectedTheme } = useSideBar();
  const [isToggleOn, setIsToggleOn] = useState(false);

  const setTheme = (value) => {
    setSelectedTheme(() => value);
  }
  
  return (
    <div className="absolute bottom-0 right-0 flex items-center justify-center m-4">
      <div className="flex items-center justify-start gap-2">
        {isToggleOn && <div className="flex gap-6 px-6 py-3 rounded-full bg-appColor-5">
          <span className="mr-2 text-sm text-content-2">Color Scheme</span>
          <button onClick={() => setTheme("")} className={selectedTheme == '' ? 'w-6 h-6 rounded-full bg-[#51649a] ring-4 ring-[#51649a]/35' : 'w-6 h-6 rounded-full bg-[#51649a]'}></button>
          <button onClick={() => setTheme("cool")} className={selectedTheme == 'cool' ? 'w-6 h-6 rounded-full bg-[#164f64] ring-4 ring-[#164f64]/35' : 'w-6 h-6 rounded-full bg-[#164f64]'}></button>
          <button onClick={() => setTheme("dark")} className={selectedTheme == 'dark' ? 'w-6 h-6 rounded-full bg-[#28334d] ring-4 ring-[#ffffff]/15' : 'w-6 h-6 rounded-full bg-[#28334d]'}></button>
        </div>}
        <button onClick={() => setIsToggleOn(prev => !prev)} className="flex items-center justify-center w-12 h-12 rounded-full bg-appColor-1">
          <Svg
            name="settings-outline"
            styles="fill-appColor-3 text-content-1 w-6 h-6"
          />
        </button>
      </div>
    </div>
  )
}

export default Theme