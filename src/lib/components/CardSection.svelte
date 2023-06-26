<script>
    import { animate, timeline, inView, stagger } from "motion";
    import { onMount } from "svelte";

    let line, section, cardCount;

    onMount(() => {
        cardCount = section.childElementCount - 1;
        inView(
            line,
            () => {
                timeline(
                    [
                        [
                            line,
                            {
                                height: "calc(100% + 4px)",
                            },
                            { duration: 2 * cardCount },
                        ],
                        [
                            ".card .lineHorizontal",
                            {
                                width: "calc((100svw - min(40svw, 400px) * 2) / 4)",
                            },
                            {
                                duration: 1,
                                at: "<",
                                delay: stagger(2, {
                                    start: 1,
                                }),
                            },
                        ],
                    ],
                    {
                        defaultOptions: {
                            easing: "linear",
                        },
                    }
                );
            },
            {
                margin: "0px 0px -64px 0px",
            }
        );

        inView(
            ".cardSection .card > div:not(.lineHorizontal)",
            (info) => {
                animate(info.target, { opacity: 1 });
                return () => {
                    animate(info.target, { opacity: 0 });
                };
            },
            { margin: "0px 0px -175px 0px" }
        );
    });
</script>

<section class="cardSection px-0" bind:this={section}>
    <slot />
    <div class="line -top-1" bind:this={line} />
</section>

<style lang="scss">
    section > :global(.card) {
        display: grid;
        grid-template-columns: repeat(2, 1fr min(40svw, 400px) 1fr);
        align-items: center;
        grid-auto-flow: dense;
        &:not(:nth-child(1)) {
            margin-top: 20svh;
        }
    }

    section > :global(.card) {
        &:nth-child(odd) {
            & > :global(div) {
                grid-column: -3;
            }
            :global(.lineHorizontal) {
                // left: calc((100svw - min(40svw, 400px) * 2) / -4);
                grid-column: -4;
            }
        }
        &:nth-child(even) {
            & > :global(div) {
                grid-column: 2;
            }
            :global(.lineHorizontal) {
                // right: calc((100svw - min(40svw, 400px) * 2) / -4);
                grid-column: 3;
                justify-self: end;
            }
        }
    }
</style>
