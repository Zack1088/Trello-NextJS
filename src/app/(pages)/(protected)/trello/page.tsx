// pages/trello/home.tsx
import React from "react";
import TrelloLayout from "@/components/trelloComponents/TrelloLayout"; // Assurez-vous que le chemin est correct
import Board from "@/components/trelloComponents/Board";
import Header from "@/components/trelloComponents/Header";

export default function TrelloHome() {
    return (
        <TrelloLayout>
            <main>
                <Header />
                <Board />
            </main>
        </TrelloLayout>
    );
}
