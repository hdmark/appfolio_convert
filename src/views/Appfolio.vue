<template>
  <drop class="drop" @drop="handleDrop">
    <v-speed-dial
      v-model="fab"
      :bottom="true"
      :right="true"
      direction="top"
      :open-on-hover="false"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">close</v-icon>
          <v-icon v-else>settings_applications</v-icon>
        </v-btn>
      </template>
      <v-btn @click.native="$refs.file.click()" fab dark small color="green">
        <v-icon>cloud_upload</v-icon>
        <input ref="file" accept=".pdf" multiple type="file" @change="loadTextFromFile" />
      </v-btn>
      <!-- <v-btn
        @click.native="$refs.file.click()"
        color="light-blue lighten-4"
        class="text-reader"
        flat
        small
      >
        Upload
        <input ref="file" accept=".pdf" multiple type="file" @change="loadTextFromFile" />
      </v-btn>-->
      <!-- <v-btn fab dark small color="indigo">
        <v-icon>mdi-plus</v-icon>
      </v-btn>-->
      <v-btn @click="removeAll" fab dark small color="red">
        <v-icon>delete_sweep</v-icon>
      </v-btn>
    </v-speed-dial>
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
      loading: false,
      fab: false
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
    },
    removeAll() {
      this.$store.dispatch("clearProperties");
    },
    loadTextFromFile(ev) {
      this.fab = false;
      const files = ev.target.files;
      this.$store.dispatch("analyzeStatements", [...files]);
    }
  }
};
</script>
<style lang="scss" >
.v-speed-dial {
  position: absolute;
}
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
  margin-top: -3rem;
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

