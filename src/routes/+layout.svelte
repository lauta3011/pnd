<script >
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
	let { children } = $props();
</script>

<main >
	<div class="min-h-[100vh]">
		<Header />
			{@render children()}
		<Footer/>
	</div>
</main>