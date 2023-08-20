<script lang="ts">
    import type { LayoutData } from './$types'

    export let data: LayoutData

    console.log({data})
</script>

<div class="flex flex-row gap-2">
    <div>Hello, {data.user}</div>
    <a class="text-blue-600 underline" href="/logout">Logout</a>
</div>