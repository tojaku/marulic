import { createSignal } from "solid-js";

export default function Play() {
    return (
        <div>
            <iframe
                width="1262"
                height="710"
                src="https://www.youtube.com/embed/m0_BrpKjGFM?autoplay=1"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
        </div>
    );
}
