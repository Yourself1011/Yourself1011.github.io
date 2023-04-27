<script lang="ts">
    import { onMount } from "svelte";
    import LineEnd from "../LineEnd.svelte";
    import { inView, animate } from "motion";

    let nameElement;

    onMount(() => {
        inView(
            nameElement,
            (info) => {
                if ((info.target as HTMLElement).style.opacity !== "") {
                    animate(info.target, {
                        opacity: 1,
                        transform: "none",
                    });
                }
                return () => {
                    animate(info.target, {
                        opacity: 0,
                        transform: "translateY(-100%)",
                    });
                };
            },
            { amount: "all", margin: "-20% 0px 0px 0px" }
        );
    });
</script>

<section
    class="home flex text-center items-center justify-center h-[100svh] mb-[calc(70svh+24px)]"
>
    <h1 bind:this={nameElement} class="text-9xl animate-fade-slow">
        Daniel Zhang
    </h1>
    <LineEnd
        --x="50%"
        --y="70%"
        class="animate-[svgDraw_7s_ease-in-out_forwards_3s]"
    />
    <div
        style="--animation-height: 100svh"
        class="line animate-[drawLine_3s_cubic-bezier(0.2,0,0.8,1)_forwards_5s] top-[calc(70%+24px)]"
    />
</section>

<style lang="scss">
    :global(.home .circle .path) {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
    }
</style>
