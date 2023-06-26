<script>
    let className = "";
    export let title,
        subtitle = "",
        line = false,
        src,
        color;
    export { className as class };
</script>

<div class="card relative">
    {#if line}
        <div class="lineHorizontal" />
    {/if}
    <div
        class="overflow-hidden rounded-3xl h-[400px] max-w-[400px] {className}"
        style:border-color={color}
    >
        <div
            class="top p-4 flex flex-col justify-end gap-4 h-[50%] bg-center bg-cover"
            style:background-image="url({src})"
            style:background-color="rgba(0, 0, 0, 0.5)"
            style:background-blend-mode="darken"
        >
            <h3 class="text-white leading-[4px]">{title}</h3>
            {#if subtitle}
                <h4 class="text-gray-300">{subtitle}</h4>
            {/if}
        </div>
        <div class="p-4">
            <slot />
        </div>
    </div>
</div>

<style lang="scss">
    .card > div:not(.lineHorizontal) {
        border: 8px solid;
    }
</style>
