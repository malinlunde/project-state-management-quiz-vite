import { useQuizStore } from './stores/useQuizStore';

export function RestartComponent() {
    const quizStore = useQuizStore(); //Initialize the store

    const handleRestart = () => {
        quizStore.restart(); //Call the restart action to reset the quiz
    };

    return (
        <div>
            <button onClick={handleRestart}>
                Restart Quiz
            </button>
        </div>
    );
}