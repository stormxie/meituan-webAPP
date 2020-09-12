<template>
    <div>
        <self-header>我的美团</self-header>
        <self-account></self-account>
        <self-block height=".2rem"></self-block>
        <self-order></self-order>
        <self-block height=".2rem"></self-block>
        <self-list></self-list>
    </div>
</template>

<script>
import axios from 'axios'
import SelfAccount from './comments/Account'
import SelfList from './comments/List'
import SelfOrder from './comments/Order'
import SelfHeader from 'common/header/Header'
import SelfBlock from 'common/block/Block'

export default {
    name: 'Self',
    components: {
        SelfBlock,
        SelfHeader,
        SelfAccount,
        SelfList,
        SelfOrder
    },
    // activated() {
    //     axios.get('/api/user/logincheck')
    //     .then(this.getSucc)
    // },
    // methods: {
    //     getSucc (res) {
    //         console.log(res.data.ret)
    //         if(!res.data.ret) {
    //             this.$router.push('/login')
    //         }
    //     }
    // }
}
</script>