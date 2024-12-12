import { createSignal } from "solid-js";

export default function Play() {
    return (
        <div>
            <iframe class="w-full min-h-[75vh]" src="https://www.youtube.com/embed/m0_BrpKjGFM?autoplay=1"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe>
            <p class="mt-2">Predstava je rad studenata UMAS-a iz Splita.</p>
        </div>
    );
}
