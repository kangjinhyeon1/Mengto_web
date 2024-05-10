"use client"

import Button from "../common/button";
import Editor from "../common/editor";
import Header from "../common/header";
import Input from "../common/input";

export default function WriteSection() {
    return (
        <div className="w-full flex flex-col items-center gap-10">
            <Header />
            <div className="flex w-[70%] justify-between mt-6">
                <p className="text-titleMedium">커리큘럼 작성하기</p>
                <div className="w-[10%]">
                    <Button margin="none">작성하기</Button>
                </div>
            </div>
            <div className="flex w-[70%]">
                <div className="w-[40%]">
                    <Input placeholder="제목을 입력해주세요" type="text" label="제목" />
                </div>
            </div>
            <div className="flex flex-col w-[70%] gap-2 mb-[30vh]">
                <p className="text-titleMedium text-gray-700">본문</p>
                <Editor />
            </div>
        </div>
    );
}