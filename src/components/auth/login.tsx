"use client"
import Link from "next/link";
import Button from "../common/button";
import Input from "../common/input";

export default function LoginInput() {
    return (
        <div className='w-[22%] flex flex-col items-center gap-10 min-w-[300px]'>
            <img src="/img/Title.svg" className='w-25' />
            <Input type="text" label="이메일" />
            <Input type="password" label="비밀번호" />
            <Button>로그인</Button>
            <div className="flex items-center justify-between w-full">
                <div className='flex gap-[10px]'>
                    <img src="/img/katalk.png" className="w-10 h-10" />
                    <img src="/img/naver.png" className="w-10 h-10" />
                    <img src="/img/google.png" className="w-10 h-10" />
                </div>
                <div className='flex'>
                    <Link href="/signup" className='text-main'>계정</Link>
                    <p className='text-sub'>이 없으신가요?</p>
                </div>
            </div>
        </div>
    );
}