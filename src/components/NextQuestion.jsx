import  useQuizStore  from '../stores/useQuizStore';

export function NextQuestion() {
    const quizStore = useQuizStore(); //Initialize the store

    const handleNextQuestion = () => {
        quizStore.goToNextQuestion(); //Call the got to next question action 
    };

    return (
        <div>
            <button onClick={handleNextQuestion}>
                Next Question
            </button>
        </div>
    );
}