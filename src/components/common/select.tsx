"use client"

import { useState } from "react";

export default function Select({ label }: { label: string }) {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <div className="flex flex-col w-full gap-4">
            <label className='text-titleMedium text-gray-700'>{label}</label>
            <div className="flex gap-4">
                <div className="flex gap-20" onClick={() => setIsChecked(false)}>
                    <label>멘토</label>
                    {
                        isChecked ? <img src="/img/unchecked.svg"></img> : <img src="/img/checked.svg"></img>
                    }
                </div>
                <div className="flex gap-20" onClick={() => setIsChecked(true)}>
                    <label>멘티</label>
                    {
                        !isChecked ? <img src="/img/unchecked.svg"></img> : <img src="/img/checked.svg"></img>
                    }
                </div>
            </div>
        </div>
    );
}