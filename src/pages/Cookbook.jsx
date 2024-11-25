import pdf from "../assets/kuharica.pdf"

export default function Cookbook(props) {
    return (
        <>
            <div class="text-3xl font-bold">Kuharica</div>
            <div class="mb-3">
                {/*DODATI OPIS*/}
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