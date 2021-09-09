/**
 * {
 *    path 路径
 *    component 组件
 *    meta 元数据
 *      title 标题
 *      icon  图标
 *      auth  权限设置
 *    children 子菜单   children=0,父级菜单项不显示
 *    hidden: false 默认false  游离不显示路径向
 * }
 */

import { 
  AreaChartOutlined,
  MenuOutlined,
  HeatMapOutlined
} from '@ant-design/icons'
import { List } from '@/views/index/List';
import { echartsDemo } from '@/views/index/echartsDemo';

const asyncRouters = [
  {
    path: '/List',
    component: List,
    meta: {
      title: '列表',
      icon: <MenuOutlined />,
      auth: true
    }
  },
  {
    path: '/echartsDemo',
    component: echartsDemo,
    meta: {
      title: '图表',
      icon: <AreaChartOutlined />,
      auth: true
    },
  },
  {
    path: '/testSubMenu',
    meta: {
      title: '自定义菜单组',
      icon: <HeatMapOutlined />,
      auth: true
    },
    children: [
      {
        path: '/testSubMenu1',
        meta: {
          title: '子菜单1',
          auth: true
        }
      },
      {
        path: '/testSubMenu2',
        meta: {
          title: '子菜单2',
          auth: true
        }
      },
      {
        path: '/testSubMenu3',
        meta: {
          title: '子菜单3',
          auth: true
        },
        hidden: true
      }
    ]
  }
]

export default asyncRouters