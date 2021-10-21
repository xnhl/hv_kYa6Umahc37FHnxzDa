<script>
	import Animal from './components/Animal.svelte'
	import SearchBox from './components/SearchBox.svelte'
	let current_page = 0
	let total_pages = 0
	let animals = []
	$: morePages = current_page >= total_pages
	const getSearchValues = () => {
		let zipcode = document.getElementById("zip-code")
		let zipcodeValue = (zipcode.value && zipcode.value !== "") ? `&location=${zipcode.value}` : ""
		let distance = document.getElementById("distance")
		let distanceValue = (distance.value && distance.value !== "") ? `&distance=${distance.value}` : ""
		let type = document.getElementById("type")
		let typeValue = type.options[type.selectedIndex].value !== "" ? `&type=${type.options[type.selectedIndex].value}` : ""
		let sex = document.getElementById("sex")
		let sexValue = sex.options[sex.selectedIndex].value !== "" ? `&gender=${sex.options[sex.selectedIndex].value}` : ""
		let size = document.getElementById("size")
		let sizeValue = size.options[size.selectedIndex].value !== "" ? `&size=${size.options[size.selectedIndex].value}` : ""
		let age = document.getElementById("age")
		let ageValue = age.options[age.selectedIndex].value !== "" ? `&age=${age.options[age.selectedIndex].value}` : ""
		let coat = document.getElementById("coat")
		let coatValue = coat.options[coat.selectedIndex].value !== "" ? `&coat=${coat.options[coat.selectedIndex].value}` : ""
		let status = document.getElementById("status")
		let statusValue = status.options[status.selectedIndex].value !== "" ? `&status=${status.options[status.selectedIndex].value}` : ""
		let searchOptions = `${zipcodeValue}${distanceValue}${typeValue}${sexValue}${sizeValue}${ageValue}${coatValue}${statusValue}`
		return searchOptions.substring(1)
	}
	const loadMore = async () => { if (current_page < total_pages) { search(true, current_page) } }
	const search = async (concatAnimals = false, page = null) => {
		let searchParams = getSearchValues()
		let intro = document.getElementById("intro")
		intro.classList.add("hide")
		let existingToken = localStorage.getItem("petfinder_token")
		if (existingToken) {
			try {
				let actualCall = await fetch(`https://api.petfinder.com/v2/animals?${searchParams}${page !== null ? `&page=${current_page+1}` : ""}`, {
					headers: {
						'Authorization': `Bearer ${existingToken}`,
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				})
				let callRes = await actualCall.json()
				if (concatAnimals == true) { animals = animals.concat(callRes.animals) } else { animals = callRes.animals }
				current_page = callRes.pagination.current_page
				total_pages = callRes.pagination.total_pages
			} catch(error) {
				try {
					let tokenCall = await fetch('https://api.petfinder.com/v2/oauth2/token', {
						method: 'POST',
						body: `grant_type=client_credentials&client_id=${mikey}&client_secret=${miceykrit}`,
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					let tokenRes = await tokenCall.json()
					let newToken = tokenRes.access_token
					localStorage.setItem("petfinder_token", newToken)
					let actualCall = await fetch(`https://api.petfinder.com/v2/animals?${searchParams}${page !== null ? `&page=${current_page+1}` : ""}`, {
						headers: {
							'Authorization': `Bearer ${newToken}`,
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					})
					let callRes = await actualCall.json()
					if (concatAnimals == true) { animals = animals.concat(callRes.animals) } else { animals = callRes.animals }
					current_page = callRes.pagination.current_page
					total_pages = callRes.pagination.total_pages
				} catch(error) {
					console.log(error)
				}
			}
		} else {
			let tokenCall = await fetch('https://api.petfinder.com/v2/oauth2/token', {
				method: 'POST',
				body: `grant_type=client_credentials&client_id=${mikey}&client_secret=${miceykrit}`,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			let tokenRes = await tokenCall.json()
			let newToken = tokenRes.access_token
			localStorage.setItem("petfinder_token", newToken)
			let actualCall = await fetch(`https://api.petfinder.com/v2/animals?${searchParams}${page !== null ? `&page=${current_page+1}` : ""}`, {
				headers: {
					'Authorization': `Bearer ${newToken}`,
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			let callRes = await actualCall.json()
			if (concatAnimals == true) { animals = animals.concat(callRes.animals) } else { animals = callRes.animals }
			current_page = callRes.pagination.current_page
			total_pages = callRes.pagination.total_pages
		}
	}
</script>

<style lang="sass">
#wrapper
	margin: 0 auto
	margin-top: 2.5em
	max-width: 90em
	min-height: 98vh
	color: white
	animation: fadeIn 0.2s ease-in-out
	margin: 0.5rem auto
	#animals-wrapper
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: center
		align-items: stretch
		padding: 0.5rem
		border-radius: 0.25rem
		box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
		background: #dfdfdf
		#load-more
			width: 100%
			padding: 1rem
			cursor: pointer
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			text-align: center
			font-size: 1.1rem
			line-height: 1.1rem
			border-radius: 0.25rem
			margin: 2rem auto 0 auto
			transition: all 0.1s ease-in-out
			box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
			background: #dfdfdf
			&:hover
				box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.15), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.25) inset
	#intro
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: center
		margin: 3rem auto
		padding: 3rem
		border-radius: 0.5rem
		max-width: 50rem
		animation: fadeIn 0.2s ease-in-out
		box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
		background: #dfdfdf
		.intro-text
			width: 100%
			margin: 1rem auto
			font-size: 2.5rem
			line-height: 3rem
			text-align: center
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
</style>

<svelte:head>
	<title>Pet Finder</title>
	<meta name="description" content="">
</svelte:head>

<div id="wrapper">
	<SearchBox on:searchSubmit={search} />
	<div id="intro">
		<div class="intro-text">Welcome!</div>
		<div class="intro-text">Let's find pets in your area.</div>
		<div class="intro-text">Use the search box to begin.</div>
	</div>
	{#if animals.length}
		<div id="animals-wrapper">
			{#each animals as animal, index}
				<Animal info={animal} />
			{/each}
			<div id="load-more" on:click={loadMore} class:hide={morePages}>Load 20 more</div>
		</div>
	{/if}
</div>
