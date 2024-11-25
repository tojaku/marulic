export default function About(props) {
    return (
        <div className="p-8">
            <div className="card w-full lg:w-1/2 mx-auto">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Obrtnička škola Koprivnica</h2>
                    <p className="text-gray-600">
                        Trg Slobode 7 <br />
                        48000 Koprivnica <br />
                        Hrvatska
                    </p>
                    <div className="divider">Profesori</div>
                    <ul className="list-disc list-inside">
                        <li>Danijela Vrtiprah</li>
                        <li>Tomislav Jakupić</li>
                    </ul>
                    <div className="divider">Učenici</div>
                    <p className="font-semibold">Voditelji skupina:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Mihael Šestak</li>
                        <li>Viktor Srpak</li>
                        <li>Paula Šimić</li>
                    </ul>
                    <p className="font-semibold">Ostali učenici:</p>
                    <ul className="list-disc list-inside grid grid-cols-2 gap-2">
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
