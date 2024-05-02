"use client"

import Button from "../common/button";
import Input from "../common/input";
import Select from "../common/select";

export default function AddInput() {
    return (
        <div className="w-[22%] flex flex-col items-center gap-10 min-w-[300px]">
            <p className='text-titleLarge text-main mb-8'>추가 정보를 기입하여주세요!</p>
            <Input type="text" label="닉네임" />
            <Select label="멘토 & 멘티 선택" />
            <Input type="text" label="한 줄 소개" />
            <Button margin="0">저장하기</Button>
        </div>
    );
}