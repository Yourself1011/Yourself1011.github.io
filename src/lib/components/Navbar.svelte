<script>
    import { Link } from "svelte-routing";
</script>

<header class="animate-[fade_5s_ease-in-out_forwards_3s] opacity-0">
    <nav
        class="absolute top-0 h-[15%] w-full flex items-center justify-end px-32"
    >
        <button
            on:click={() => {
                document
                    .querySelector("section.about")
                    .scrollIntoView({ behavior: "smooth" });
            }}>About</button
        >
    </nav>
</header>

<style>
</style>
