<template>
	<body>
		<div class="w3-cell-row container">
			<comp-side-nav />
			<comp-view />
		</div>
	</body>
</template>
<script>
export default {
	name: 'CompMainFrame',
	components:{
		CompSideNav: () => import('./SideNav'),
		CompView: () => import('./View'),
	}
}
</script>