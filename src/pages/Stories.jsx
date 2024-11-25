import pdf from "../assets/eknjiga.pdf"

export default function Stories(props) {
    return (
        <>
            <div class="text-3xl font-bold mb-3">Priče o Maruliću</div>
            <div class="mb-3">
                Pred vama je zbirka kratkih priča inspiriranih životom i djelom Marka Marulića. Većina
                priča nastala je u sinergiji čovjeka i najnovije tehnologije (AI).<br></br>
                Uspješnost korištenja novoga alata, kako u oblikovanju likovnoga stvaralaštva, tako i u
                oblikovanju literarnoga, ovisi o umijeću i kreativnosti osobe koja ga koristi, ali i o
                poznavanju konkretnih činjenica vezanih uz temu koja se obrađuje.<br></br>
                Svima koji će "prelistavati" ovu digitalnu knjigu posvećenu ocu hrvatske književnosti,
                želimo istinski užitak u čitanju.
            </div>
            <object data={pdf} type="application/pdf" class="w-full min-h-[75vh]">
                Vaš preglednik ne podržava prikaz PDF zapisa.
                Datoteku možete pogledati <button class="link" onClick={() => {
                    window.location.href = pdf;
                }}>ovdje</button>.
            </object>
        </>
    );
}