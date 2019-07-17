<template>
  <drop class="drop" @drop="handleDrop">
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
  </drop>
</template>

<script>
// @ is an alias to /src

import properties from "@/components/Properties";
import { parser } from "../util/parse";
import { Drop } from "vue-drag-drop";
export default {
  name: "home",
  components: {
    // vueDropzone: vue2Dropzone,
    properties,
    Drop
  },

  data: function() {
    return {
      loading: false
    };
  },
  computed: {
    propertyData() {
      this.loading = false;
      return this.$store.getters.properties;
    }
  },

  methods: {
    async handleDrop(data, event) {
      console.log("data", data);
      this.loading = true;
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files[0].type == "application/pdf") {
        this.loading = true;
      }
      this.$store.dispatch("analyzeStatements", [...files]);
    }
  }
};
</script>
<style lang="scss" >
.drop {
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
}

.home {
  height: 100%;
  width: 100%;
}
.properties-container {
  padding-top: 2rem;
  height: 100%;
}

.dragMessage {
  // height: 100%;
  // align-content: center;
  // position: absolute;
  // top: 45%;
  text-align: center;
  text-decoration: none;
  padding: 0rem 5rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
  // text-align: center;
}

#loading {
  position: absolute;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // align-content: center;
  // justify-content: center;
  // justify-items: center;
  text-align: center;
  // top: 40%;
  width: 100%;
  height: 100%;
  background-color: #90a4ae !important;
  z-index: 10;
}
.loading__content {
  font-size: 3rem;
}
</style>

