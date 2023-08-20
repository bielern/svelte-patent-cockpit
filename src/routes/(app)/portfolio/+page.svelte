<script lang="ts">
    export let data
</script>

<h1 class="mb-4">Portfolio</h1>

<div class="flex flex-col gap-2 max-w-md">
{#each data.portfolio as patent (patent.id)}
    <form class='border-2 border-blue-300 rounded-md p-4 flex flex-row gap-2' method="POST" action="?/post">
        <input type="hidden" name="id" value={patent.id} />
        <input class='grow' type="text" value={patent.name} name="name" />
        <input class="rounded-md px-3 py-2 text-blue-600 border border-blue-400 hover:bg-blue-400 hover:text-white" 
            type="submit" value="Update" />
        <input class="rounded-md px-3 py-2 text-red-600 border border-red-400 hover:bg-red-400 hover:text-white" 
            type="submit" value="Delete" formaction="?/delete" />
    </form>
{/each}

<form class="p-4 rounded-md border-2 border-gray-300" method="POST" action="?/post">
    <h2 class="text-xl font-medium mb-2">Add Patent</h2>
    <label class="block">
        <div class="text-gray-600 mb-1">Name</div>
        <input class="w-full px-2 py-1 border boder-gray-300 rounded-md" type="text" name="name" placeholder="Name..." />
    </label>
    <div class='flex flex-row-reverse mt-4'>
        <button class="rounded-md px-3 py-2 border text-blue-600 border-blue-400 hover:bg-blue-400 hover:text-white">Add</button>
    </div>
</form>
</div>

