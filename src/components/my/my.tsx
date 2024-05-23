import Header from "../common/header";

export const MyPage = () => {
    return (
        <div className="w-full flex flex-col items-center gap-10">
            <Header />
            <main className="flex flex-col w-[70%] gap-10 mt-10">
                <section className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                        <p className="text-titleLarge">홍길동</p>
                        <div className="text-titleLarge text-gray-50 px-7 py-1 bg-main rounded-3xl">멘토</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-titleMedium">한 줄 소개</p>
                        <p className="text-bodyMedium">맛있는 것들을 먹기 위해 공부 중 입니다.</p>
                    </div>
                </section>
                <div className="w-full h-[1px] bg-gray-200" />
                <section>
                    <p className="text-titleMedium">작성한 커리큘럼</p>
                    <article>

                    </article>
                </section>
            </main>
        </div>
    );
}