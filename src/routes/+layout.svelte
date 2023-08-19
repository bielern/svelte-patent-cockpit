<script>
    import "../app.css"
	import NavLink from "./NavLink.svelte";

    const routes = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
    ]
</script>

<navbar class="bg-blue-200 w-full p-4 sm:px-20 font-medium flex flex-row gap-4 text-slate-500">
{#each routes as {name, path}}
    <NavLink {name} {path} />
{/each}
</navbar>

<main class="p-4 sm:px-20 sm:pt-10">
    <slot />
</main>