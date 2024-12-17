import slika1 from "../assets/marulic_bista.png";

export default function Home(props) {
    return (
        <>
            <div class="text-center mb-10">
                <h1 class="text-4xl font-extrabold mt-4">Život Marka Marulića</h1>
                <h2 class="text-2xl mt-2">Povodom godine Marka Marulića - 500 godina od njegove smrti</h2>
            </div>

            <div class="flex flex-col lg:flex-row items-center lg:items-start mt-6 max-w-6xl mx-auto gap-8">
                <div class="lg:w-1/2 flex justify-center">
                    <img src={slika1} alt="Skulptura Marka Marulića" class="max-h-[50vh] rounded shadow-lg" />
                </div>
                <div class="lg:w-1/2 text-lg">
                    <p>
                        Kako bi obilježila 500. obljetnicu smrti Marka Marulića, Vlada Republike Hrvatske proglasila je 2024. godinu Godinom Marka Marulića. Ako ovo čitate, znači da ste skenirali jedan od QR kodova s plakata i stigli na ovu stranicu. Stranica omogućuje uvid u biografiju Marka Marulića, njegovo stvaralaštvo te donosi zanimljive radove učenika OBŠKC koji su nastali nakon čitanja Marulićeva djela. Ova je stranica dio projekta Marulić u OBŠKC kojim su učenici naše škole obilježili Godinu posvećenu Ocu hrvatske književnost.
                    </p>
                    <p class="mt-4 font-semibold">Uživajte!</p>
                </div>
            </div>
        </>
    );
}