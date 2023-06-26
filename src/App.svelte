<script lang="ts">
    import { Route, Router } from "svelte-routing";
    import Navbar from "./lib/components/Navbar.svelte";

    import Home from "./lib/routes/Home.svelte";
</script>

<Router>
    <Route path="/">
        <main>
            <Home />
        </main>
        <Navbar />
    </Route>
</Router>

<style></style>
