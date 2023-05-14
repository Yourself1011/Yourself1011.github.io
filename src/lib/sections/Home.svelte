<script lang="ts">
    import { onMount } from "svelte";
    import LineEnd from "../components/LineEnd.svelte";
    import { inView, animate } from "motion";

    let nameElement: HTMLElement, container: HTMLElement;

    onMount(() => {
        inView(
            container,
            (info) => {
                if (nameElement.style.opacity !== "") {
                    animate(nameElement, {
                        opacity: 1,
                        transform: "none",
                    });
                }
                return () => {
                    animate(nameElement, {
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
    <div bind:this={container}>
        <h1
            bind:this={nameElement}
            class="text-[min(8rem,15svh)] animate-fade-slow leading-none"
        >
            Daniel Zhang
        </h1>
    </div>
    <LineEnd
        --x="50%"
        --y="75%"
        class="animate-[svgDraw_7s_ease-in-out_forwards_3s]"
    />
    <div
        style="--animation-height: calc(95svh + 8px)"
        class="line animate-[drawLine_3s_cubic-bezier(0.2,0,0.8,1)_forwards_5s] top-[calc(75%+24px)]"
    />
</section>

<style lang="scss">
    :global(.home .circle .path) {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
    }
</style>
