'use client'
import "./card.css";
import custom from './custom.module.css';
import { useState } from "react";
import clsx from "clsx";

export default function Card() {
    const [exPending, setExPending] = useState(true);

    const toggleExPending = () => {
        setExPending(!exPending);
    };

    return (
        <>
            <div className={clsx('card', {
                [custom.card]: exPending
            })}>
                Card
                <button onClick={toggleExPending}>
                    Toggle exPending
                </button>
            </div>
        </>
    );
}