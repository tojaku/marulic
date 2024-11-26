import { createSignal } from "solid-js";

export default function Quiz(props) {
    const [answers, setAnswers] = createSignal({});
    const [showResults, setShowResults] = createSignal(false);

    const handleAnswer = (index, answer) => {
        setAnswers({ ...answers(), [index]: answer });
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((q, index) => {
            if (answers()[index] === q.correct) {
                score += 1;
            }
        });
        return score;
    };

    return (
        <div>
            <div class="text-3xl font-bold">Kviz o Marku Maruliću</div>

            {questions.map((q, index) => (
                <>
                    <p class="text-xl mt-4">{q.question}</p>
                    {q.options.map((option, i) => (
                        <div class="form-control">
                            <label class="label cursor-pointer w-fit gap-2">
                                <input type="radio" name={`question-${index}`} value={i} class="radio checked:bg-red-500" onClick={() => handleAnswer(index, i)} />
                                <span class="label-text text-lg">{option}</span>
                            </label>
                        </div>
                    ))}
                </>

            ))}
            <button class="btn btn-primary" onClick={() => setShowResults(true)}>Završi kviz</button>
            {showResults() && (
                <div class="text-4xl mt-8">
                    <p>Vaš rezultat: {calculateScore()} / {questions.length}</p>
                </div>
            )}
        </div>
    );
}

const questions = [
    {
        question: "Koji je nadimak dobio Marko Marulić zbog svog doprinosa hrvatskoj književnosti?",
        options: ["Otac Hrvatske Književnosti", "Hrvatski Shakespeare", "Hrvatski Dante", "Književni Genij"],
        correct: 0,
    },
    {
        question: "Kada je rođen Marko Marulić?",
        options: ["1449. g.", "1450. g.", "1498. g."],
        correct: 1,
    },
    {
        question: "Gdje je rođen Marko Marulić?",
        options: ["u Đelekovcu", "u Splitu", "u Virju"],
        correct: 1,
    },
    {
        question: "Koje je godine umro Marko Marulić?",
        options: ["1528. g.", "1524. g.", "1513. g."],
        correct: 0,
    },
    {
        question: "Koje je najpoznatije djelo Marka Marulića?",
        options: ["„Osman“", "„Judita“", "„Smrt Smail-age Čengića“", "„Planine“"],
        correct: 1,
    },
    {
        question: "Gdje se odvija radnja „Judite“?",
        options: ["u Jeruzalemu", "u Betuliji", "u Splitu"],
        correct: 1,
    },
    {
        question: "S koliko je godina Judita umrla?",
        options: ["87", "105", "67"],
        correct: 1,
    },
    {
        question: "Djelo „Judita“ je ep.",
        options: ["DA", "NE"],
        correct: 0,
    },
    {
        question: "Djelo „Judita“ prvi je književni ep pisan na hrvatskome jeziku.",
        options: ["DA", "NE"],
        correct: 0,
    },
    {
        question: "Od koliko se pjevanja (libara) sastoji djelo „Judita“?",
        options: ["5", "6", "8", "10"],
        correct: 1,
    },
];

