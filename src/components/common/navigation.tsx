import { useState } from "react";
import Button from "./button";

export default function Navigation() {

    const [navigate, setNavigate] = useState<boolean>(false);

    return (
        <div className="w-[70%] mt-16 flex justify-between items-center">
            <div className="w-36 flex items-center justify-between text-titleMedium">
                <p onClick={() => setNavigate(false)} className={`${navigate ? 'text-gray-700' : 'text-main'} cursor-pointer`}>커리큘럼</p>
                <div className='w-[2px] h-6 bg-sub rounded-[10px]' />
                <p onClick={() => setNavigate(true)} className={`${navigate ? 'text-main' : 'text-gray-700'} cursor-pointer`}>공부 팁</p>
            </div>
            <div className="w-[10%]">
                <Button>작성하기</Button>
            </div>
        </div>
    );
}