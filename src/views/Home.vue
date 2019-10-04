<template>
  <div class="main">
    <v-img
      height="100%"
      class="main-bg"
      dark
      :src="require('@/assets/architecture-buildings-city-417192.jpg')"
      gradient="to top right,rgba(55,71,79, 0.7), rgba(55,71,79, 0.4)"
    ></v-img>

    <div class="header">
      <div class="header__primary">A working Collection of tools to help real estate investors</div>
      <div class="header__secondary"></div>
    </div>
    <!-- <drop class="drop" @drop="handleDrop">
    <v-alert id="loading" v-model="loading">
      <v-content class="loading__content">LOADING</v-content>
    </v-alert>
    <div class="properties-container" v-if="propertyData.length > 0">
      <properties :propertyData="propertyData"></properties>
    </div>
    <h1 class="dragMessage" v-else>
      Drag and drop owners statements
      into this area
      or click Upload
    </h1>
    </drop>-->
  </div>
</template>

<script>
// @ is an alias to /src

// import properties from "@/components/Properties";
// import { parser } from "../util/parse";
// import { Drop } from "vue-drag-drop";
export default {
  name: "home"
};
</script>
<style lang="scss" >
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-bg {
  height: 100%;
  width: 100%;
  position: absolute;
}
.header {
  position: relative;
  top: -3rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  &__primary {
    text-align: center;
    width: 80%;
    font-size: 4rem;
    color: white;
  }
}
</style>

