<script>
    import "../../app.css"
	import NavLink from "./NavLink.svelte";
	import UserMenu from "./UserMenu.svelte";

    const routes = [
        {name: 'Home', path: '/'},
        {name: 'Portfolio', path: '/portfolio'},
    ]

    export let data
</script>

<svelte:head>
    <title>Patent Cockpit</title>
</svelte:head>

<navbar class="bg-blue-200 w-full p-4 sm:px-20 font-medium flex flex-row gap-4 text-slate-500">
{#each routes as {name, path}}
    <NavLink {name} {path} />
{/each}
<div class="grow" />
<UserMenu {data} />
</navbar>

<main class="p-4 sm:px-20 sm:pt-10">
    <slot />
</main>