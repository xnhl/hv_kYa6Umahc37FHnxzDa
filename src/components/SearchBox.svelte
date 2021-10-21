<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	const searchSubmit = async () => { dispatch('searchSubmit') }
</script>

<style lang="sass">
#searchbox-wrapper
	display: flex
	align-items: center
	flex-direction: column
	justify-content: space-around
	margin: 0.5rem auto
	width: 100%
	align-self: flex-start
	#search-form
		padding: 0.5rem
		width: 100%
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: space-around
		border-radius: 0.5rem
		background-color: #e6e6e6
		box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.025), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
		margin: 0 auto
		input
			background: #dfdfdf
			color: rgba(255, 255, 255, 0.9)
			padding: 0.5rem
			margin-top: 0.5rem
			border: 0.2rem solid rgba(white, 0.25)
			border-radius: 0.5rem
		#search-submit-wrapper
			width: 100%
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			#search-submit
				color: rgba(0, 0, 0, 0.9)
				flex: 1
				max-width: 20rem
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				height: 2rem
				cursor: pointer
				border-radius: 0.5rem
				padding: 0.25rem
				margin: 0.5rem
				background-color: #dfdfdf
				text-align: center
				transition: all 0.2s ease-in-out
				@media (max-width: 40em)
					flex: 1
					width: 100%
				&:hover
					background-color: #e6e6e6
					box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
		.field
			width: auto
			flex-grow: 1
			margin: 0.25rem
			*
				width: 100%
			.label
				text-align: center
				margin-left: 0.5rem
				color: rgba(0, 0, 0, 0.9)
			.select-container
				.select
					background-color: #e6e6e6
					color: rgba(0, 0, 0, 0.9)
					padding: 0.5rem
					margin-top: 0.5rem
					border: 0.2rem solid rgba(white, 0.25)
					border-radius: 0.5rem
					.option
			.control
				.input
					color: rgba(0, 0, 0, 0.9)
					&::placeholder
						color: rgba(0, 0, 0, 0.9)
</style>

<div id="searchbox-wrapper">
	<form action="" id="search-form">
		<div class="field">
			<label class="label" for="zip">Zip Code</label>
			<div class="control">
				<input type="text" class="input" placeholder="12345" id="zip-code" name="zip">
			</div>
		</div>
		<div class="field">
			<label class="label" for="distance">Distance</label>
			<div class="control">
				<input type="text" class="input" placeholder="100" id="distance" name="distance">
			</div>
		</div>
		<div class="field">
			<label class="label" for="type">Type</label>
			<div class="select-container">
				<select class="select" id="type" name="type">
					<option class="option" value=""></option>
					<option class="option" value="dog">Dog</option>
					<option class="option" value="cat">Cat</option>
					<option class="option" value="rabbit">Rabbit</option>
					<option class="option" value="bird">Bird</option>
					<option class="option" value="horse">Horse</option>
					<option class="option" value="barnyard">Barnyard</option>
					<option class="option" value="small-furry">Small & Furry</option>
					<option class="option" value="scales-fins-other">Scales, Fins & Other</option>
				</select>
			</div>
		</div>
		<div class="field">
			<label class="label" for="sex">Sex</label>
			<div class="select-container">
				<select class="select" id="sex" name="sex">
					<option class="option" value=""></option>
					<option class="option" value="male">Male</option>
					<option class="option" value="female">Female</option>
					<option class="option" value="unknown">Unknown</option>
				</select>
			</div>
		</div>
		<div class="field">
			<label class="label" for="size">Size</label>
			<div class="select-container">
				<select class="select" id="size" name="size">
					<option class="option" value=""></option>
					<option class="option" value="small">Small</option>
					<option class="option" value="medium">Medium</option>
					<option class="option" value="large">Large</option>
					<option class="option" value="xlarge">X-Large</option>
				</select>
			</div>
		</div>
		<div class="field">
			<label class="label" for="age">Age</label>
			<div class="select-container">
				<select class="select" id="age" name="age">
					<option class="option" value=""></option>
					<option class="option" value="baby">Baby</option>
					<option class="option" value="young">Young</option>
					<option class="option" value="adult">Adult</option>
					<option class="option" value="senior">Senior</option>
				</select>
			</div>
		</div>
		<div class="field">
			<label class="label" for="coat">Coat</label>
			<div class="select-container">
				<select class="select" id="coat" name="coat">
					<option class="option" value=""></option>
					<option class="option" value="short">Short</option>
					<option class="option" value="medium">Medium</option>
					<option class="option" value="long">Long</option>
					<option class="option" value="wire">Wire</option>
					<option class="option" value="hairless">Hairless</option>
					<option class="option" value="curly">Curly</option>
				</select>
			</div>
		</div>
		<div class="field">
			<label class="label" for="status">Status</label>
			<div class="select-container">
				<select class="select" id="status" name="status">
					<option class="option" value=""></option>
					<option class="option" value="adoptable">Adoptable</option>
					<option class="option" value="adopted">Adopted</option>
					<option class="option" value="found">Found</option>
				</select>
			</div>
		</div>
		<div id="search-submit-wrapper">
			<div on:click={searchSubmit} id="search-submit">Search</div>
		</div>
	</form>
</div>
