"use client"
import { LoginAPI } from "@/apis";
import { loginType } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../common/button";
import Input from "../common/input";

export default function LoginInput() {

    const router = useRouter();

    const [input, setInput] = useState<loginType>({
        email: "",
        password: ""
    })

    const handleInputValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = e.target
        setInput({...input, [name]: value})
    }

    const handleLogin = async() =>{
        const res = await LoginAPI(input)
        if(res === 404){
            alert("이메일을 다시 확인해주세요")
            return
        }
        if(res === 409){
            alert("비밀번호를 다시 확인해주세요")
            return
        }
        if(res === 201){
            router.push("/")
        }
    }

    return (
        <div className='w-[22%] flex flex-col items-center gap-10 min-w-[300px]'>
            <img src="/img/Title.svg" className='w-25 cursor-pointer' onClick={() => router.push('/')} />
            <Input name="email" value={input.email} onChange={handleInputValue} type="text" label="이메일" />
            <Input name="password" value={input.password} onChange={handleInputValue} type="password" label="비밀번호" />
            <Button onClick={handleLogin} margin="medium">로그인</Button>
            <div className="flex items-center justify-center w-full">
                <div className='flex'>
                    <Link href="/signup" className='text-main'>계정</Link>
                    <p className='text-sub'>이 없으신가요?</p>
                </div>
                {/* <div className='flex gap-[10px]'>
                    <img src="/img/katalk.png" className="w-10 h-10 cursor-pointer" />
                    <img src="/img/naver.png" className="w-10 h-10 cursor-pointer" />
                    <img src="/img/google.png" className="w-10 h-10 cursor-pointer" />
                </div> */}
            </div>
        </div>
    );
}