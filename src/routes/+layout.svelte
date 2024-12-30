<script>
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
	let { children } = $props();
</script>

<main class="h-screen">
	<Header />
	{@render children()}
</main>