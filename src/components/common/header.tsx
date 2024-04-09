"use client"

import Link from "next/link";

export default function Header() {
    return (
        <div className="w-[70%] flex justify-between mt-5">
            <img src="/img/LongLogo.png" className='w-[10%] min-w-24' />
            <div className="w-[17%] min-w-44 flex items-center justify-between">
                <img src="/img/search.svg" />
                <Link href="/login" className='text-titleMedium text-gray-900'>로그인</Link>
                <Link href="/my" className='text-titleMedium text-gray-900'>마이페이지</Link>
            </div>
        </div>
    );
}