<template>
  <div>
    <!-- fill-height 属性，将区块内容设置为 100%，这样才能够让页面可以在垂直方向居中 -->
    <!-- 你也可以将 fill-height 作为 class 使用，以便应用到任何类上面，class="fill-height" -->
    <v-container fill-height>
      <!-- align 属性，将内容块设置为垂直方向居中 -->
      <!-- justify 属性，将内容块设置为横向方向居中 -->
      <!-- 更多用例请查看官方文档 -->
      <v-row align="center" justify="center">
        <v-col>
          center
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
