<script>
	import moment from 'moment'
	import { decode } from 'html-entities'
	export let info = {}
	let listIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbGlzdCI+PGxpbmUgeDE9IjgiIHkxPSI2IiB4Mj0iMjEiIHkyPSI2Ij48L2xpbmU+PGxpbmUgeDE9IjgiIHkxPSIxMiIgeDI9IjIxIiB5Mj0iMTIiPjwvbGluZT48bGluZSB4MT0iOCIgeTE9IjE4IiB4Mj0iMjEiIHkyPSIxOCI+PC9saW5lPjxsaW5lIHgxPSIzIiB5MT0iNiIgeDI9IjMuMDEiIHkyPSI2Ij48L2xpbmU+PGxpbmUgeDE9IjMiIHkxPSIxMiIgeDI9IjMuMDEiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIzIiB5MT0iMTgiIHgyPSIzLjAxIiB5Mj0iMTgiPjwvbGluZT48L3N2Zz4="
	let mappinIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWFwLXBpbiI+PHBhdGggZD0iTTIxIDEwYzAgNy05IDEzLTkgMTNzLTktNi05LTEzYTkgOSAwIDAgMSAxOCAweiI+PC9wYXRoPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiPjwvY2lyY2xlPjwvc3ZnPg=="
	let phonecallIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItcGhvbmUtY2FsbCI+PHBhdGggZD0iTTE1LjA1IDVBNSA1IDAgMCAxIDE5IDguOTVNMTUuMDUgMUE5IDkgMCAwIDEgMjMgOC45NG0tMSA3Ljk4djNhMiAyIDAgMCAxLTIuMTggMiAxOS43OSAxOS43OSAwIDAgMS04LjYzLTMuMDcgMTkuNSAxOS41IDAgMCAxLTYtNiAxOS43OSAxOS43OSAwIDAgMS0zLjA3LTguNjdBMiAyIDAgMCAxIDQuMTEgMmgzYTIgMiAwIDAgMSAyIDEuNzIgMTIuODQgMTIuODQgMCAwIDAgLjcgMi44MSAyIDIgMCAwIDEtLjQ1IDIuMTFMOC4wOSA5LjkxYTE2IDE2IDAgMCAwIDYgNmwxLjI3LTEuMjdhMiAyIDAgMCAxIDIuMTEtLjQ1IDEyLjg0IDEyLjg0IDAgMCAwIDIuODEuN0EyIDIgMCAwIDEgMjIgMTYuOTJ6Ij48L3BhdGg+PC9zdmc+"
	let mailIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWFpbCI+PHBhdGggZD0iTTQgNGgxNmMxLjEgMCAyIC45IDIgMnYxMmMwIDEuMS0uOSAyLTIgMkg0Yy0xLjEgMC0yLS45LTItMlY2YzAtMS4xLjktMiAyLTJ6Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iMjIsNiAxMiwxMyAyLDYiPjwvcG9seWxpbmU+PC9zdmc+"
	let clockIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2xvY2siPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDE2IDE0Ij48L3BvbHlsaW5lPjwvc3ZnPg=="
	let moreIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbW9yZS1ob3Jpem9udGFsIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSI1IiBjeT0iMTIiIHI9IjEiPjwvY2lyY2xlPjwvc3ZnPg=="
	$: id = info.id
	$: organization_id = info.organization_id
	$: url = info.url
	$: type = info.type
	$: species = info.species
	$: image = (Array.isArray(info.photos) && info.photos.length && info.photos[0].small) ? info.photos[0].small : ""
	$: hasImage = (Array.isArray(info.photos) && info.photos.length && info.photos[0].small) ? true : false
	$: hasPrimaryBreed = info.breeds.primary ? true : false
	$: primaryBreed = info.breeds.primary ? info.breeds.primary : ""
	$: hasSecondaryBreed = info.breeds.secondary ? true : false
	$: secondaryBreed = info.breeds.secondary ? info.breeds.secondary : ""
	$: isMixedBreed = info.breeds.mixed ? true : false
	$: mixedBreed = info.breeds.mixed ? info.breeds.mixed : ""
	$: hasUnknownBreed = info.breeds.unknown ? true : false
	$: unknownBreed = info.breeds.unknown ? info.breeds.unknown : ""
	$: hasPrimaryColor = info.colors.primary ? true : false
	$: primaryColor = info.colors.primary ? info.colors.primary : ""
	$: hasSecondaryColor = info.colors.secondary ? true : false
	$: secondaryColor = info.colors.secondary ? info.colors.secondary : ""
	$: hasTertiaryColor = info.colors.tertiary ? true : false
	$: tertiaryColor = info.colors.tertiary ? info.colors.tertiary : ""
	$: age = info.age ? info.age : ""
	$: gender = info.gender ? info.gender : ""
	$: size = info.size ? info.size : ""
	$: ifCoat = info.coat ? true : false
	$: coat = info.coat ? info.coat : ""
	$: hasBreeds = info.breeds.primary ? true : false
	$: hasColors = info.colors.primary ? true : false
	$: if_spayed_neutered = info.attributes.spayed_neutered ? true : false
	$: if_house_trained = info.attributes.house_trained ? true : false
	$: if_declawed = info.attributes.declawed ? true : false
	$: if_special_needs = info.attributes.special_needs ? true : false
	$: if_shots_current = info.attributes.shots_current ? true : false
	$: email = info.contact.email ? `E-mail: ${info.contact.email}` : false
	$: distance = info.distance ? `Distance: ${parseInt(info.distance)} miles` : ""
	$: hasDescription = info.description ? true : false
	$: animalInfo = ` - ${size} ${age} ${gender} ${type}`
	const description = () => { return decode(decode(info.description)) }
	const published_at = () => {
		let rightNow = moment()
		let published = moment(info.published_at)
		let howLong = rightNow.diff(published, 'days')
		let publishedFormatted = moment(info.published_at).format('LL')
		return howLong > 1 ? `Last Update: ${publishedFormatted} (${howLong} days ago)` : howLong == 1 ? `Last Update: ${publishedFormatted} (${howLong} day ago)` : howLong == 0 ? `Last Update: ${publishedFormatted} (Today)` : null
	}
	const name = () => {
		const toTitleCase = (str) => {
			str = str.toLowerCase().split(' ')
			for (var i = 0; i < str.length; i++) {
				str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
			}
			return str.join(' ')
		}
		return info.name.length > 2 ? toTitleCase(info.name) : info.name
	}
	const status = () => {
		const toTitleCase = (str) => {
			str = str.toLowerCase().split(' ')
			for (var i = 0; i < str.length; i++) {
				str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
			}
			return str.join(' ')
		}
		return toTitleCase(info.status)
	}
	const attributes = () => {
		let keys = Object.keys(info.attributes)
		let keysLen = keys.length
		let keysSpaced = keys.map(key => key.replace("_", " "))
		let newAttrs = []
		for (let i = 0; i < keysLen; i++) {
			let newKey = keysSpaced[i]
			newAttrs[i] = {
				newKey: info.attributes[i]
			}
		}
		return newAttrs
	}
	const address = () => {
		let address1 = info.contact.address.address1 ? info.contact.address.address1 : ""
		let address2 = info.contact.address.address2 ? info.contact.address.address2 : ""
		let city = info.contact.address.city ? info.contact.address.city : ""
		let state = info.contact.address.state ? info.contact.address.state : ""
		let postcode = info.contact.address.postcode ? info.contact.address.postcode : ""
		let country = info.contact.address.country ? info.contact.address.country : ""
		return (info.contact.address.address1 || info.contact.address.address2) ? `Location: ${address1}, ${city}, ${state} ${postcode}` : ` Location: ${city}, ${state} ${postcode}`
	}
	const phone = () => {
		if (info.contact.phone && info.contact.phone.replace(/ /gi, "") !== "") {
			let initial = info.contact.phone.replace(/[^0-9]/gi, "")
			if (initial.length === 10) {
				let num1 = initial.slice(0, 3)
				let num2 = initial.slice(3, 6)
				let num3 = initial.slice(6)
				return `Phone: (${num1})${num2}-${num3}`
			} else if (initial.length === 11) {
				let num0 = initial.slice(0, 1)
				let num1 = initial.slice(1, 4)
				let num2 = initial.slice(4, 7)
				let num3 = initial.slice(7)
				return `Phone: ${num0}-${num1}-${num2}-${num3}`
			}
		} else return false
	}
</script>

<style lang="sass">
.animal
	display: flex
	flex-wrap: wrap
	align-items: center
	justify-content: center
	background: #e6e6e6
	border: 0.1rem solid rgba(white, 0.25)
	border-radius: 0.5rem
	margin: 0.66rem
	padding: 0.5rem
	min-width: 100%
	flex: 1
	transition: all 0.2s ease-in-out
	box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
	&:hover
		box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.15), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.25) inset
	@media (min-width: 66rem)
		min-width: 40%
	.animal-image-wrapper
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: center
		order: -1
		min-width: 100%
		max-width: 25%
		margin: 0 0 1rem 0
		border-radius: 0.25rem
		@media (min-width: 35rem)
			order: 1
			min-width: auto
			width: auto
			margin: 0.5rem 1rem
		.animal-image
			height: auto
			width: auto
			padding: 0.5rem
			background: #dfdfdf
			border-radius: 0.25rem
		.animal-image-backup
			height: auto
			width: auto
			font-size: 0.75rem
			padding: 2.5rem 0.5rem
			background: #dfdfdf
			border-radius: 0.25rem
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
	.animal-info-wrapper
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: center
		flex: 1
		@media (min-width: 66rem)
			height: 100%
		.animal-name
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			align-items: stretch
			flex: 1
			padding: 0.5rem
			min-width: 100%
			.animal-name-text
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				font-size: 1.25rem
				margin: auto 0.5rem
				width: auto
			.animal-name-info
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				width: auto
			.animal-name-breeds
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				margin: auto 0.5rem
				width: auto
				&:before
					content: '('
				&:after
					content: ')'
				.animal-breed
					display: flex
					flex-wrap: wrap
					align-items: center
					justify-content: center
					text-align: left
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
					&.mix
						&:before
							content: ''
							margin-left: 0.1rem
		.animal-other-info
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			min-width: 100%
			.animal-other-info-item
				margin: 0.25rem auto
				&.description
					display: flex
					flex-wrap: wrap
					align-items: center
					justify-content: center
					padding: 1rem
					min-width: 100%
					line-height: 1.25rem
					text-indent: 0.25rem
		.breeds-colors-wrapper
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			min-width: 100%
			padding: 0.25rem
			.animal-breeds
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				flex: 1
				min-width: 100%
				@media (min-width: 28em)
					min-width: 40%
				.animal-breed
					display: flex
					flex-wrap: wrap
					align-items: center
					justify-content: center
					text-align: left
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
			.animal-colors
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				flex: 1
				min-width: 100%
				@media (min-width: 28rem)
					min-width: 40%
				.animal-color
					display: flex
					flex-wrap: wrap
					align-items: center
					justify-content: center
					text-align: left
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
		.animal-options
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			width: 100%
			padding: 0.25rem
			justify-content: flex-start
			.animal-options-title
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				.animal-options-title-icon
					margin-right: 0.5rem
					height: 1.5rem
					width: 1.5rem
				.animal-options-title-text
			.animal-options-list
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				margin-left: 0.25rem
				.animal-option
					display: flex
					flex-wrap: wrap
					align-items: center
					justify-content: center
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
		.animal-contact
			width: 100%
			padding: 0.25rem
			.animal-contact-method
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				justify-content: flex-start
				margin: 0.75rem auto
				.animal-contact-method-icon
					margin-right: 0.5rem
					height: 1.5rem
					width: 1.5rem
				.animal-contact-method-text
		.animal-updated
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			padding: 0.25rem
			width: 100%
			justify-content: flex-start
			.animal-updated-icon
				margin-right: 0.5rem
				height: 1.5rem
				width: 1.5rem
			.animal-updated-text
		.animal-link-wrapper
			width: 100%
			padding: 0.25rem
			display: flex
			flex-wrap: wrap
			align-items: center
			justify-content: center
			justify-content: flex-start
			.animal-link
				display: flex
				flex-wrap: wrap
				align-items: center
				justify-content: center
				margin-top: 0.5rem
				padding: 0.5rem
				text-decoration: none
				border-radius: 0.25rem
				transition: all 0.2s ease-in-out
				box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
				&:hover
					box-shadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.15), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.25) inset
				.animal-link-icon
					margin-right: 0.5rem
					height: 1.5rem
					width: 1.5rem
				.animal-link-text
</style>

<div class="animal" animal_id={id} age={age} gender={gender} size={size} name={name()} org={organization_id} mixed={isMixedBreed} distance={distance} spayed_neutered={if_spayed_neutered} house_trained={if_house_trained} declawed={if_declawed} special_needs={if_special_needs} shots_current={if_shots_current}>
	<div class="animal-info-wrapper">
		<div class="animal-name">
			<p class="animal-name-text">{name()}</p>
			<p class="animal-name-info">{animalInfo}</p>
			{#if hasBreeds}
				<div class="animal-name-breeds">
					{#if hasPrimaryBreed}
						<span class="animal-breed">{primaryBreed}</span>
				{/if}
					{#if hasSecondaryBreed}
						<span class="animal-breed">{secondaryBreed}</span>
				{/if}
					{#if isMixedBreed}
						<span class="animal-breed mix">Mix</span>
				{/if}
					{#if hasUnknownBreed}
						<span class="animal-breed">{unknownBreed}</span>
				{/if}
				</div>
			{/if}
		</div>
		<div class="breeds-colors-wrapper">
			{#if hasColors}
				<div class="animal-colors">
					{#if hasPrimaryColor}
						<div class="animal-color">{`Color: ${primaryColor}`}</div>
					{/if}
					{#if hasSecondaryColor}
						<div class="animal-color">{secondaryColor}</div>
					{/if}
					{#if hasTertiaryColor}
						<div class="animal-color">{tertiaryColor}</div>
					{/if}
				</div>
			{/if}
		</div>
		<div class="animal-other-info">
			{#if ifCoat}
				<p class="animal-other-info-item">{`Coat: ${coat}`}</p>
			{/if}
			{#if hasDescription}
				<p class="animal-other-info-item description">{description()}</p>
			{/if}
			<!-- <p class="animal-other-info-item">{published_at()}</p> -->
			<p class="animal-other-info-item">{distance}</p>
		</div>
		{#if if_spayed_neutered || if_house_trained || if_declawed || if_special_needs || if_shots_current}
			<div class="animal-options">
				<div class="animal-options-title">
					<img class="animal-options-title-icon" src={listIcon} alt="details">
					<p class="animal-options-title-text">Details: </p>
				</div>
				<div class="animal-options-list">
					{#if if_spayed_neutered}
						<p class="animal-option">spayed / neutered</p>
					{/if}
					{#if if_house_trained}
						<p class="animal-option">house trained</p>
					{/if}
					{#if if_declawed}
						<p class="animal-option">declawed</p>
					{/if}
					{#if if_special_needs}
						<p class="animal-option">special needs</p>
					{/if}
					{#if if_shots_current}
						<p class="animal-option">shots current</p>
					{/if}
				</div>
			</div>
		{/if}
		{#if address() || phone() || email}
			<div class="animal-contact">
				{#if address}
					<div class="animal-contact-method">
						<img class="animal-contact-method-icon" src={mappinIcon} alt="location">
						<p class="animal-contact-method-text">{address()}</p>
					</div>
				{/if}
				{#if phone()}
					<div class="animal-contact-method">
						<img class="animal-contact-method-icon" src={phonecallIcon} alt="phone number">
						<p class="animal-contact-method-text">{phone()}</p>
					</div>
				{/if}
				{#if email}
					<div class="animal-contact-method">
						<img class="animal-contact-method-icon" src={mailIcon} alt="e-mail address">
						<p class="animal-contact-method-text">{email}</p>
					</div>
				{/if}
			</div>
		{/if}
		<div class="animal-updated">
			<img class="animal-updated-icon" src={clockIcon} alt="last update">
			<p class="animal-updated-text">{published_at()}</p>
		</div>
		<div class="animal-link-wrapper">
			<a class="animal-link" href="{url}" target="_blank">
				<img class="animal-link-icon" src={moreIcon} alt="more information">
				<p class="animal-link-text">More Information</p>
			</a>
		</div>
	</div>
	<div class="animal-image-wrapper">
		{#if hasImage}
			<img src={image} alt="" class="animal-image">
		{/if}
		{#if !hasImage}
			<p class="animal-image-backup">No image found</p>
		{/if}
	</div>
</div>
