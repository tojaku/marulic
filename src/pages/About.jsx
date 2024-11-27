import logo from "../assets/obskc.png";

export default function About(props) {
    return (
        <div class="p-8">
            <div class="card w-full lg:w-10/12 mx-auto">
                <div class="card-body">
                    <h2 class="card-title text-2xl">Obrtnička škola Koprivnica</h2>
                    <div class="flex flex-wrap gap-4 items-center my-4">
                        <img src={logo} class="w-64" />
                        <p class="text-2xl">
                            Trg Slobode 7 <br />
                            48000 Koprivnica <br />
                            Hrvatska
                        </p>
                    </div>
                    <div class="divider">Profesori</div>
                    <ul class="list-disc list-inside">
                        <li>Danijela Vrtiprah</li>
                        <li>Tomislav Jakupić</li>
                    </ul>
                    <div class="divider">Učenici</div>
                    <p class="font-semibold">Voditelji skupina:</p>
                    <ul class="list-disc list-inside mb-4">
                        <li>Mihael Šestak</li>
                        <li>Viktor Srpak</li>
                        <li>Paula Šimić</li>
                    </ul>

                    {/* TODO: Potrebno dodati ostale ucenike iz drugih razreda */}
                    <p class="font-semibold">Ostali učenici:</p>
                    <ul class="list-disc list-inside grid lg:grid-cols-2 grid-cols-1">
                        <li>Ivano Grubić</li>
                        <li>Marko Habek</li>
                        <li>Fran Horvat</li>
                        <li>Gabrijel Remenar</li>
                        <li>Tin Stunja</li>
                        <li>Vanja Šalamon</li>
                        <li>Jan Županić</li>
                        <li>Matija Barešić</li>
                        <li>Saša Crnjaković</li>
                        <li>Ivan Čordaš</li>
                        <li>Domagoj Dlesk</li>
                        <li>Lucija Đukin</li>
                        <li>Valentin Funtak</li>
                        <li>Noa Golubić</li>
                        <li>Tristan Horvat</li>
                        <li>Domagoj Kočmar</li>
                        <li>Matija Mohenski</li>
                        <li>Petar Šarec</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
