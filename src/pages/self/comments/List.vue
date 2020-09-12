<template>
  <div class="list">
    <list-item v-for="item of List" :key="item.id" :iconStyle="item.style" :code="item.code">
        <template v-slot:default>
            {{item.desc}}
        </template>
    </list-item>
  </div>
</template>

<script>
import ListItem from 'common/listitem/ListItem.vue'
export default {
    name: 'SelfList',
    components: {
        ListItem
    },
    data () {
        return {
          List: [
            {
              id: '001',
              style: {"background": "#0092de", "font-size": ".4rem"},
              desc: "我的收藏",
              code: "&#xe78c;"
            }, {
              id: '002',
              style: {"background": "#eb2c00", "font-size": ".4rem"},
              desc: "我的抵用券",
              code: "&#xe7ee;"
            }, {
              id: '003',
              style: {"background": "#f5b345", "font-size": ".4rem"},
              desc: "我的抽奖单",
              code: "&#xe67c;"
            }, {
              id: '004',
              style: {"background": "rgb(148, 76, 215)", "font-size": ".4rem"},
              desc: "积分换礼品",
              code: "&#xe61e;"
            },
          ]
        }
    }
}
</script>
