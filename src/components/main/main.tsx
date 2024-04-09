"use client"

import Header from "../common/header";
import Navigation from "../common/navigation";

export default function MainSection() {
    return (
        <div className="w-full min-w-[50%] flex flex-col items-center">
            <Header />
            <Navigation />
            <div className="w-[70%] h-[2px] bg-gray-200 my-5" />
        </div>
    );
}