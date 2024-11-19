import slika1 from "../assets/home_marulic_1.png";

export default function Home(props) {
    return (
        <div>
            <div class="text-4xl text-center font-bold mt-4">
                Život Marka Marulića
            </div>

            <div class="text-2xl text-center mt-4">
                Povodom godine Marka Marulića - 500 godina od njegove smrti
            </div>

            <div>
                <img src={slika1} alt="Skulptura Marka Marulića" class="max-h-[50vh] m-auto mt-4" />
            </div>

            <div class="text-lg text-center mt-6 max-w-[75%] m-auto">
                Obilježavajući 500. obljetnicu smrti Marka Marulića, Vlada Republike Hrvatske proglasila je 2024. godinu Godinom Marka Marulića.
                Ako ovo čitate, znači da ste skenirali jedan od QR kodova priloženih na plakatu te došli na ovu stranicu.
                Ova stranica vodi vas kroz Marulićev život povodom godine Marka Marulića.
                <br></br>Uživajte!
            </div>
        </div>
    );
}