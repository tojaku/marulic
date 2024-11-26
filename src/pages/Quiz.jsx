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
        <div class="p-8">
            <div class="text-3xl font-bold mb-4">Kviz o Marku Maruliću</div>

            {questions.map((q, index) => (
                <div class="mb-6" key={index}>
                    <p class="text-xl">{index + 1}. {q.question}</p>
                    {q.options.map((option, i) => (
                        <div class="form-control" key={i}>
                            <label class="label cursor-pointer w-fit gap-2">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={i}
                                    class="radio checked:bg-red-500"
                                    onClick={() => handleAnswer(index, i)}
                                />
                                <span class="label-text text-lg">{option}</span>
                            </label>
                        </div>
                    ))}
                    {showResults() && (
                        <p
                            class={
                                answers()[index] === q.correct
                                    ? "text-green-500 mt-2"
                                    : "text-red-500 mt-2"
                            }
                        >
                            {answers()[index] === q.correct
                                ? "Točan odgovor!"
                                : `Netočno. Točan odgovor je: ${q.options[q.correct]}`}
                        </p>
                    )}
                </div>
            ))}

            <button
                class="btn btn-primary mt-4"
                onClick={() => setShowResults(true)}
            >
                Završi kviz
            </button>

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
        question: "Kojom je vrstom stiha pisano djelo „Judita“?",
        options: ["dvostruko rimovanim dvanaestercem", "šestercem", "dvanaestercem"],
        correct: 0,
    },
    {
        question: "Čiju glavu u ruci nosi Judita na kraju djela?",
        options: ["Nabukodonosorovu", "Holofernovu", "Joakimovu", "Ahiorovu"],
        correct: 1,
    },
    {
        question: "Marulićeva „Judita“ napisana je i objavljena na početku…",
        options: ["14. stoljeća", "15. stoljeća", "16. stoljeća", "17. stoljeća"],
        correct: 2,
    },
    {
        question: "Kako se naziva pjevanje u „Juditi“?",
        options: ["plač", "stenjanje", "skazanje", "libro"],
        correct: 3,
    },
    {
        question: "Kako se zove postupak u dijelu stiha: „zato ću moliti, Bože, tvoju svitlost…“?",
        options: ["alegorija", "metafora", "personifikacija", "invokacija"],
        correct: 3,
    },
    {
        question: "Kako se zove Juditina sluškinja?",
        options: ["Abra", "Holoferna", "Simona"],
        correct: 0,
    },
    {
        question: "Koji je događaj opisan u djelu „Judita“?",
        options: ["Opsada Betulije", "Bitka kod Maratona", "Trojanski rat"],
        correct: 0,
    },
    {
        question: "Koje je godine prvi put objavljena „Judita“?",
        options: ["1492. g.", "1521. g.", "1580. g."],
        correct: 1,
    },
    {
        question: "U kojem se stoljeću odvija radnja „Judite“?",
        options: ["7. st. pr. Kr.", "7. st.", "1. st. pr. Kr."],
        correct: 0,
    },
    {
        question: "Tko je naredio Holofernu da pokori nedostojnike?",
        options: ["Nabukodonosor", "Arfakad", "Akior"],
        correct: 0,
    },
    {
        question: "Što se dogodilo Juditinu gradu nakon napada Holofernove vojske?",
        options: ["Grad je srušen.", "Stanovništvo je porobljeno.", "Zavladala je žeđ."],
        correct: 2,
    },
];
