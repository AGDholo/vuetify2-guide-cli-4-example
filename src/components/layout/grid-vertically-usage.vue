<template>
  <div>
    <!-- 只需要添加 class="flex-column" 这个类名即可让布局垂直排列 -->
    <!-- 更多用例请查看 Flex 文档 -->
    <v-row no-gutters class="flex-column">
      <v-col v-for="n in 3" :key="n" cols="12">
        One of three columns
      </v-col>
    </v-row>
  </div>
</template>
