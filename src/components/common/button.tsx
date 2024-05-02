"use client"

export default function Button({
    children,
    margin
}: {
    children: React.ReactNode,
    margin: string,
}) {

    const marginTopValue: any = {
        none: "",
        small: "mt-5",
        medium: "mt-10",
        large: "mt-15"
    }

    return (
        <button
            className={`w-full min-w-20 h-10 ${marginTopValue[margin]} text-gray-50 duration-300 border rounded-[5px] bg-main hover:brightness-105 active:bg-sub`}
        >
            {children}
        </button>
    );
}