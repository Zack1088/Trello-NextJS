// components/TrelloLayout.tsx
import React from "react";
import { Inter } from "next/font/google";
import Modal from "@/components/trelloComponents/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Trello app",
    description: "for learning",
};

const TrelloLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className={inter.className}>
            {children}
            <Modal />
        </div>
    );
}

export default TrelloLayout;
