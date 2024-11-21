import pdf from "../assets/eknjiga.pdf"

export default function Stories(props) {

    function download() {
        <a href="/src/assets/eknjiga.pdf" download>Preuzmi e-knjigu</a>
    }

    return (
        <>
            <div class="text-xl font-bold mb-5">Priče o Maruliću</div>
            <div class="mb-5">
                Pred vama je zbirka kratkih priča inspiriranih životom i djelom Marka Marulića. Većina
                priča nastala je u sinergiji čovjeka i najnovije tehnologije (UI).<br></br>
                Uspješnost korištenja novoga alata, kako u oblikovanju likovnoga ostvaraja, tako i u
                oblikovanju literarnoga, ovisi o umijeću i kreativnosti osobe koja ga koristi, ali i o
                poznavanju konkretnih činjenica vezanih uz temu koja se obrađuje.<br></br>
                Svima koji će „prelistavati“ ovu digitalni knjigu posvećenu ocu hrvatske književnosti,
                želimo istinski užitak u čitanju..
            </div>
            <a href={pdf} download>
                <button onclick={download()} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Preuzmi e-knjigu</button>
            </a>
            <object data={pdf} type="application/pdf" width="100%" height="750px">
                Ne podrzava...
            </object>
        </>
    );
}