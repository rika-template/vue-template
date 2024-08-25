/**
 * @Author Rika
 * @Description
 * @CreateData 2024/08/25
 */
import {RouteRecordRaw} from "vue-router";

export default [
  {
    path: '',
    component: () => import('@/layout/index.vue')
  }
] satisfies RouteRecordRaw[]
