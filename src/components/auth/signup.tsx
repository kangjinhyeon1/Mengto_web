"use client"

import Button from "../common/button";
import Input from "../common/input";
import Select from "../common/select";

export default function SignupInput() {
    return (
        <div className="w-[22%] flex flex-col items-center gap-8 min-w-[300px]">
            <img src="/img/Title.svg" className="w-25" />
            <Input type="text" label="닉네임" />
            <Input type="text" label="이메일" />
            <Input type="password" label="비밀번호" />
            <Input type="password" label="비밀번호 확인" />
            <Select label="멘토 & 멘티 선택" />
            <Input type="text" label="한 줄 소개" />
            <Button>회원가입</Button>
        </div>
    );
}