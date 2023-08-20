<script>
    import "../../app.css"
</script>

<svelte:head>
    <title>Patent Cockpit</title>
</svelte:head>

<main class="p-4 sm:p-10 min-h-screen bg-blue-200" >
    <div class="rounded-md bg-white shadow mx-auto p-8 max-w-md mt-20">
    <slot />
    </div>
</main>