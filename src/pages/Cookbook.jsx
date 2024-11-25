import kuharica from "../assets/kuharica.pdf"

export default function Cookbook(props) {
    return (
        <>
            <div class="text-3xl font-bold">Kuharica</div>
            <div class="mb-3">
                {/*DODATI OPIS*/}
            </div>
            <object data={kuharica} type="application/pdf" width="100%" height="750px">
                Vaš preglednik ne podržava prikaz PDF zapisa.
            </object>
        </>
    );
}