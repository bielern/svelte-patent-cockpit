<script lang="ts">
    import { page } from '$app/stores';

    export let name: string;
    export let path: string;

    export const ssr = false;

    let active = false
    $: active = $page.url.pathname === path
    //$: console.log({path, active})
</script>

<a class={active ? 'text-gray-900' : 'text-gray-500'} href={path}>{name}</a>