<script>
    import { onMount } from "svelte";
    import LineEnd from "../LineEnd.svelte";
    import { inView, animate } from "motion";

    let section;

    onMount(() => {
        inView(
            section,
            () => {
                animate(".animate-fly", { transform: "none", opacity: 1 });
                return () => {
                    animate(".animate-fly.left", {
                        transform: "translateX(-100%)",
                        opacity: 0,
                    });
                    animate(".animate-fly.right", {
                        transform: "translateX(100%)",
                        opacity: 0,
                    });
                };
            },
            { margin: "0px 0px -50% 0px" }
        );
    });
</script>

<section
    class="about lg:px-[128px] md:flex-row flex-col flex items-center justify-center gap-[128px] h-[100svh] overflow-x-hidden"
    bind:this={section}
>
    <LineEnd --x="50%" --y="28px" />
    <div class="flex-1 animate-fly left -translate-x-full opacity-0 text-right">
        <h2 class="text-5xl pb-8">About me</h2>
        <p>
            Hi, I'm Daniel, a full-stack software engineer who is always looking
            to learn and try new things. Apart from programming, I enjoy playing
            piano, mountain biking, and speedcubing (badly).
        </p>
    </div>
    <div class="flex-1 animate-fly right translate-x-full opacity-0">
        <img
            src="me.jpg"
            alt="Daniel Zhang"
            class="rounded-md mx-auto max-h-[75svh]"
        />
    </div>
    <LineEnd --x="50%" --y="calc(100svh - 28px)" />
</section>

<style>
</style>
