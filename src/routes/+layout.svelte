<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
	let { children } = $props();
</script>

<main class="min-h-screen flex flex-col">
	<Header />
	{@render children()}
	<Footer/>
</main>