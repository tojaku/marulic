import hologram from "../assets/marko_marulic_holo.gif";
import marulic_grob from "../assets/marulic_grob.webp";
import split from "../assets/split.png";
import kuca_na_solti from "../assets/kuca_na_solti.webp";
import marko_marulic from "../assets/marko_marulic.png";
import judita_i_holofern from "../assets/judita_i_holofern.png";

export default function Projects(props) {
    return (
        <div className="p-8 min-h-screen">
            <div className="text-3xl font-bold mb-6 text-center">
                Naši radovi
            </div>
            <div className="max-w-5xl mx-auto">
                {/* Tekstualni uvod */}
                <p className="text-lg leading-relaxed mb-6">
                    Ovdje možete pogledati radove koji prikazuju Marka Marulića, njegov život i djela, kao i naš inovativni projekt holograma koji oživljava <i>Oca hrvatske književnosti</i>.
                </p>

                {/* Galerija slika */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div>
                        <img
                            src={marulic_grob}
                            alt="Marulićev grob"
                            className="w-full h-auto rounded shadow"
                        />
                        <p className="text-sm mt-2 text-center"><i>Marulićev grob</i></p>
                    </div>
                    <div>
                        <img
                            src={split}
                            alt="Split u Marulićevo vrijeme"
                            className="w-full h-auto rounded shadow"
                        />
                        <p className="text-sm mt-2 text-center"><i>Split u Marulićevo vrijeme</i></p>
                    </div>
                    <div>
                        <img
                            src={kuca_na_solti}
                            alt="Kuća na Šolti"
                            className="w-full h-auto rounded shadow"
                        />
                        <p className="text-sm mt-2 text-center"><i>Kuća na Šolti</i></p>
                    </div>
                    <div>
                        <img
                            src={judita_i_holofern}
                            alt="Judita i Holofern"
                            className="w-full h-auto rounded shadow"
                        />
                        <p className="text-sm mt-2 text-center"><i>Judita i Holofern</i></p>
                    </div>
                    <div>
                        <img
                            src={marko_marulic}
                            alt="Marko Marulić"
                            className="w-full h-auto rounded shadow"
                        />
                        <p className="text-sm mt-2 text-center"><i>Marko Marulić</i></p>
                    </div>
                </div>

                {/* Video */}
                <div className="flex justify-center items-center mb-6">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-3"><i>Hologram Marka Marulića</i></h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <img
                                src={hologram}
                                title="Hologram Marka Marulića"
                            />

                        </div>
                    </div>
                </div>


                {/* Zaključak */}
                <p className="text-lg leading-relaxed mt-6">
                    Ovi radovi predstavljaju bogatu kulturnu baštinu Marka Marulića kroz različite medije, uključujući slike, povijesne rekonstrukcije i suvremene tehnologije poput holograma. Zahvaljujemo svima koji su pridonijeli ovim kreativnim projektima!
                </p>
            </div>
        </div>
    );
}
