import type { Metadata } from "next";
import local from "next/font/local";
import "./globals.css";

const Suit = local({ src: "../../public/fonts/SUIT-Variable.woff2" })

export const metadata: Metadata = {
    title: "멩토",
    description: "공부를 하고자 하는 누구든지 사용하실 수 있습니다!",
    icons: {
        icon: "img/Logo.png",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={Suit.className}>{children}</body>
        </html>
    );
}
