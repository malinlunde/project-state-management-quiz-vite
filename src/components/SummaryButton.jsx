import React from "react";
import useQuizStore from "../stores/useQuizStore";
import { useNavigate } from "react-router-dom";

export function SummaryButton () {
    const quizOver = useQuizStore((state) => state.quizOver);
    const navigate = useNavigate();

    const goToSummary = () => {
        navigate("/Summary");
    };
    return quizOver ? <button onClick={goToSummary}>See your results!</button> : null;
};