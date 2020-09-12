<template>
    <div class="evaluation">
        <div class="block"></div>
        <div class="evaluation-wrapper">
            <div class="evaluation-grade border-bottom">
                <div class="star">
                    <span class="iconfont">&#xe76b;</span>
                    <span class="iconfont">&#xe76b;</span>
                    <span class="iconfont">&#xe76b;</span>
                    <span class="iconfont">&#xe76b;</span>
                    <span class="iconfont">&#xe78c;</span>
                    4
                </div>
                <div class="number">1400人评价</div>
            </div>
            <ul class="evaluation-comment">
                <div class="comment-item" v-for="(item, index) of commentList" :key="index">{{item.desc}}</div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailEvaluation',
    data() {
        return {
            commentList: [
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
                {
                    desc: "上菜快109"
                },
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-bottom
      &:before
        border-color #777
    .block
      height .26rem
      background #eee
    .evaluation-wrapper
      .evaluation-grade
        box-sizing border-box
        padding .2rem
        height .93rem
        line-height .53rem
        .star
          color #fa952f
          float left
          .iconfont
            padding-right .1rem
        .number
          float right
      .evaluation-comment
        padding .2rem
        display flex
        flex-wrap wrap
        .comment-item
          margin .1rem
          border .02rem solid #fdb338
          color #fdb338
          height .58rem
          line-height .58rem
          border-radius .1rem
          padding 0 .1rem
</style>
