<template>
	<div class="app">
		<AppHeader/>
		<div class="app-body">
			<Sidebar />
			<main class="main">
				<breadcrumb :list="list"/>
				<div class="container-fluid">
					<nuxt/>
				</div>
			</main>
			<!-- <AppAside/> -->
		</div>
		<AppFooter/>
	</div>
</template>

<script>
  // import nav from './_nav'
  import AppHeader from './component/AppHeader.vue'
  import AppFooter from './component/AppFooter.vue'
  import Breadcrumb from './component/Breadcrumb.vue'
  import Sidebar from './component/Sidebar/Sidebar.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'full',
    // middleware: ['authenticated'],
    components: {
      AppHeader,
      AppFooter,
      Breadcrumb,
      Sidebar
    },
    computed: {
      // ...mapGetters({
        // access: 'access/access'
      // }),
      name () {
        return this.$route.name
      },
      list () {
        return this.$route.matched
      },
      // nav () {
      //   return this.showNav(nav.items)
      // }
    },
    methods: {
      showNav (nav) {
        let navList = []
        let __self = this
        nav.forEach(function (nav) {
          if (!nav.accessName || nav.accessName.some(access => __self.access.includes(access))) {
            if (nav.children) {
              nav.children = __self.showNav(nav.children)
            }
            navList.push(nav)
          }
        })

        return navList
      }
    }
  }
</script>
