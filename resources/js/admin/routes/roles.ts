import { RouteConfig } from 'vue-router'
import Index from '@/views/roles/Index.vue'
import Create from '@/views/roles/Create.vue'
import Edit from '@/views/roles/Edit.vue'
import { AuthUser } from '@/stores/auth'

const rolesRoutes: RouteConfig[] = [
	{
		path: '/roles',
		name: 'roles.index',
		component: Index,
		meta: {
			authorize: (user: AuthUser) => user.isSuperAdmin,
		},
	},

	{
		path: '/roles/create',
		name: 'roles.create',
		component: Create,
		meta: {
			authorize: (user: AuthUser) => user.isSuperAdmin,
		},
	},

	{
		path: '/roles/:id',
		name: 'roles.edit',
		component: Edit,
		meta: {
			authorize: (user: AuthUser) => user.isSuperAdmin,
		},
	},
]

export { rolesRoutes }
