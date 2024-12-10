import { createSignal } from "solid-js";
import hologram from "../assets/marko_marulic_holo.gif";  // Import holograma
import marulic_grob from "../assets/marulic_grob.webp";
import split from "../assets/split.png";
import kuca_na_solti from "../assets/kuca_na_solti.webp";
import marko_marulic from "../assets/marko_marulic.png";
import judita_i_holofern from "../assets/judita_i_holofern.png";
import figura_marka_marulica from "../assets/Figura_Marka_Marulica.jpg";
import figura_marka_marulica2 from "../assets/Figura_Marka_Marulica_2.jpg";

export default function Projects() {
    const [isOpen, setIsOpen] = createSignal(false); // Držimo stanje za otvoreni modal
    const [activeImage, setActiveImage] = createSignal(null); // Držimo podatke o slici

    const images = [
        {
            src: marulic_grob,
            alt: "Marulićev grob",
            title: "Marulićev grob",
            author: "Tina Šimunić, 1.b",
        },
        {
            src: split,
            alt: "Split u Marulićevo vrijeme",
            title: "Split u Marulićevo vrijeme",
            author: "Tina Šimunić, 1.b",
        },
        {
            src: kuca_na_solti,
            alt: "Kuća na Šolti",
            title: "Kuća na Šolti",
            author: "Tina Šimunić, 1.b",
        },
        {
            src: judita_i_holofern,
            alt: "Judita i Holofern",
            title: "Judita i Holofern",
            author: "Tina Šimunić, 1.b",
        },
        {
            src: marko_marulic,
            alt: "Marko Marulić",
            title: "Marko Marulić",
            author: "Tina Šimunić, 1.b",
        },
        {
            src: figura_marka_marulica,
            alt: "Figura Marka Marulića",
            title: "Figura Marka Marulića izrađena od elektroničkih sklopova",
            author: "Rad učenika 2.a",
        },
        {
            src: figura_marka_marulica2,
            alt: "Figura Marka Marulića 2",
            title: "Figura Marka Marulića izrađena od elektroničkih sklopova",
            author: "Rad učenika 2.a",
        },
    ];

    const openModal = (image) => {
        setActiveImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setActiveImage(null);
    };

    return (
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl font-extrabold mb-6">Naši radovi</h1>
                <p class="text-lg leading-relaxed mb-8">
                    Ovdje možete pogledati radove koji prikazuju Marka Marulića, njegov život i djela, kao i naš inovativni projekt holograma koji oživljava <i>Oca hrvatske književnosti</i>.
                </p>
            </div>

            {/* Hologram */}
            <div class="text-center mb-12">
                <h2 class="text-2xl font-semibold mb-4">Naš inovativni hologram Marka Marulića</h2>
                <div
                    class="cursor-pointer inline-block"
                    onClick={() => openModal({ src: hologram, alt: "Hologram Marka Marulića" })}
                >
                    <img src={hologram} alt="Hologram Marka Marulića" class="w-48 h-auto mx-auto" />
                </div>
            </div>

            {/* Galerija slika */}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {images.map((image, index) => (
                    <div
                        key={index}
                        class="group overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
                        onClick={() => openModal(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            class="w-full h-60 object-cover transform transition duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div class="p-4">
                            <p class="text-sm text-center font-semibold italic">
                                {image.title}
                            </p>
                            <p class="text-xs text-center text-gray-500 mt-1">
                                {image.author}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal za prikaz slike */}
            {isOpen() && (
                <div
                    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div class="relative bg-white rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={activeImage().src}
                            alt={activeImage().alt}
                            class="w-full h-auto max-h-[90vh] max-w-[90vw] object-contain"
                        />
                        <button
                            class="absolute top-2 right-2 text-white bg-black rounded-full px-3 py-1 text-sm"
                            onClick={(e) => {
                                e.stopPropagation(); // Sprječava zatvaranje pri kliku na gumb
                                closeModal();
                            }}
                        >
                            Zatvori
                        </button>
                    </div>
                </div>
            )}

            {/* Zaključak */}
            <div class="mt-14 text-center">
                <p class="text-lg leading-relaxed">
                    Ovi radovi predstavljaju bogatu kulturnu baštinu Marka Marulića putem različitih medija, uključujući slike, povijesne rekonstrukcije i suvremene tehnologije poput holograma.
                </p>
                <p class="mt-4 text-lg font-semibold">
                    Zahvaljujemo svima koji su pridonijeli ovim kreativnim projektima!
                </p>
            </div>
        </div>
    );
}
