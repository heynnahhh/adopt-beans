'use client'

import React, {useState, useEffect, ChangeEvent} from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/outline";

type Props = {
    isDarkMode: boolean;
    handleToggle: any;
}

export default function ThemeToggle({isDarkMode, handleToggle} : Props){
    return(
        <div className="">
            <label htmlFor="darkMode" className="inline-flex items-center cursor-pointer">
                <input type="checkbox" id="darkMode" onChange={handleToggle} checked={isDarkMode} className="sr-only peer" />
                {isDarkMode ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />}
            </label>
        </div>
    )
}