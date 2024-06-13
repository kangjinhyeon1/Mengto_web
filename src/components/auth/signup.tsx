"use client"

import { SignupAPI } from "@/apis";
import { signupType } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../common/button";
import Input from "../common/input";

export default function SignupInput() {
    const router = useRouter()
    const [input, setInput] = useState<signupType>({
        name: "",
        email: "",
        password: "",
        passwordCheck: "",
        mengto: false,
        introduce: ""
    })

    const handleInputValue = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = e.target
        setInput({...input, [name]: value})
    }

    const handleCheck = (check: boolean) =>{
        setInput({...input, ["mengto"]: check})
    }

    const handleSignup = async() =>{

        if(input.password !== input.passwordCheck){
            alert("비밀번호가 일치하지 않습니다.")
            return
        }

        const res = await SignupAPI(input)
        console.log(res)
    
        if(res === 400){
            alert("모든 정보를 입력해주세요.")
            return
        }
        if(res === 406){
            alert("이메일 형식이 맞는지 확인해주세요.")
            return
        }
        if(res === 409){
            alert("중복된 이메일입니다. 확인이 필요합니다.")
            return
        }

        if(res.status === 201){
            alert("환영합니다!")
            router.push('/login')
        }
    }

    return (
        <div className="w-[22%] flex flex-col items-center gap-8 min-w-[300px]">
            <img src="/img/Title.svg" className='w-25 cursor-pointer' onClick={() => router.push('/')} />
            <Input name="name" onChange={handleInputValue} value={input.name} type="text" label="닉네임" />
            <Input name="email" onChange={handleInputValue} value={input.email} type="text" label="이메일" />
            <Input name="password" onChange={handleInputValue} value={input.password} type="password" label="비밀번호" />
            <Input name="passwordCheck" onChange={handleInputValue} value={input.passwordCheck} type="password" label="비밀번호 확인" />
            <div className="flex flex-col w-full gap-4">
                <label className='text-titleMedium text-gray-700'>멘토 & 멘티 선택</label>
                <div className="flex items-center justify-between">
                    <div className="flex gap-20" onClick={()=>handleCheck(false)}>
                        <label>멘토</label>
                        {
                            input.mengto ? <img src="/img/unchecked.svg"></img> : <img src="/img/checked.svg"></img>
                        }
                    </div>
                    <div className="flex gap-20" onClick={() => handleCheck(true)}>
                        <label>멘티</label>
                        {
                            !input.mengto ? <img src="/img/unchecked.svg"></img> : <img src="/img/checked.svg"></img>
                        }
                    </div>
                </div>
            </div>
            <Input name="introduce" onChange={handleInputValue} value={input.introduce} type="text" label="한 줄 소개" />
            <Button margin="small" onClick={handleSignup}>회원가입</Button>
        </div>
    );
}