import promocija from "../assets/promocija_video.mp4"

export default function Promotion(props) {
    return (
        <>
            <div class="text-3xl font-bold mb-3">Promocija projekta <i>Marko Marulić u OBŠKC</i></div>
            <div class="mb-3">
                <div>
                    <p>
                        Dana 12. prosinca 2024. u Obrtničkoj školi Koprivnica predstavljen je rezultat višetjednoga projekta <i>Marko Marulić u OBŠKC</i> – portret Marka Marulića u limu, mrežna stranica koja objedinjuje sve učeničke radove i renesansni stol oblikovan prema rezultatima istraživanja prehrambenih navika ljudi Marulićeva vremena. Na stolu se našlo pečenih jabuka punjenih orašastim plodovima, sok od jabuke, kolač od mandarine, kolač od višanja, pečena jetrica s heljdom, kosana mast na domaćoj pogači, namaz od čvaraka na domaćoj pogači.
                    </p>
                    <p class="mt-4 font-semibold">Djelić atmosfere završnih aktivnosti projekta <i>Marko Marulić u OBŠKC</i> donosi snimka.</p>
                </div>
                <div class="mt-4 lg:w-full flex justify-center">
                    <iframe class="w-full min-h-[75vh]" src={promocija}
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe>
                </div>
            </div>
        </>
    );
}