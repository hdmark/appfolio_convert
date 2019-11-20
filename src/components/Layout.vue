<template>
  <v-app id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-toolbar flat>
          <v-list>
            <!-- <v-list-tile>
            <v-list-tile-title class="title">Application</v-list-tile-title>
            </v-list-tile>-->
          </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list dense class="pt-0">
          <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="blue-grey darken-3
" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Real Estate Web Tools</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-toolbar-items>
          <v-btn
            @click.native="$refs.file.click()"
            color="light-blue lighten-4"
            class="text-reader"
            flat
            small
          >
            Upload
            <input ref="file" accept=".pdf" multiple type="file" @change="loadTextFromFile" />
          </v-btn>

          <v-btn @click="removeAll" color="red lighten-1" class="remove" flat small>
            <strong>Remove All</strong>
          </v-btn>
        </v-toolbar-items>-->
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer class="footer" color="blue-grey darken-3" app>
        <a :href="'//' + 'paypal.me/lvmgmt'" target="_blank">
          <v-btn small>Donate</v-btn>
        </a>
        Donations are not expected but who are we to stop you!
        <v-spacer></v-spacer>
        <span class="white--text">&copy; Copyright Mark and Min</span>&nbsp;&nbsp;&nbsp;
      </v-footer>
    </v-app>
  </v-app>
</template>
<script>
export default {
  data: function() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "home", path: "/" },
        {
          title: "Owners Statement",
          icon: "account_balance",
          path: "/appfolio"
        },
        { title: "About", icon: "question_answer", path: "/about" }
      ],
      right: null
    };
  },
  methods: {
    removeAll() {
      this.$store.dispatch("clearProperties");
    },
    async loadTextFromFile(ev) {
      const files = ev.target.files;
      this.$store.dispatch("analyzeStatements", [...files]);
    }
  }
};
</script>

<style lang="scss" scoped>
.text-reader {
  // width: 100px;
  // height: 3rem;
  // position: relative;
  // overflow: hidden;
  // display: inline-block;

  /* Fancy button style 😎 */
  // border: 2px solid black;
  // border-radius: 5px;
  // padding: 8px 12px;
  // cursor: pointer;
}
.text-reader input {
  // width: 100%;
  // height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
.footer {
  padding: 0.5rem;
}
.remove {
  // font-weight: 500
}
</style>


