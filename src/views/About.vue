<template>
  <div class="about">
    <h1 class="about__header">About This Site</h1>

    <p>
      Appfolio owner statements are given to owners in PDF form. Although this is useful for reviewing numbers, it is not easy to utilize this information Quickbooks and other accounting software.
      This site will convert a standard Appfolio owners statement into a CSV that can then be utilized.
    </p>
    <p>The tool will go through each owners statement and generate a single CSV per property in the owners statement</p>

    <p>Usage - drag and drop Owners Statements into the white space of the page, or click "UPLOAD" and a file select will appear. Multiple files can be converted at one time</p>

    <p>To clear the currently converted files from the browswer window, click "REMOVE ALL"</p>
    <p>
      <strong>We do not collect any data on your Statements. They are 100% processed within your own browser.</strong>
    </p>
    <br />
    <p>FUNCTIONALITY MIGHT NOT WORK WITH INTERNET EXPLORER</p>
  </div>
</template>
<style lang="scss" scoped>
.about {
  font-size: 1.2rem;
  display: flex;

  // align-items: center;
  // align-content: center;
  // justify-content: center;
  // align-content: center;
  flex-direction: column;
  padding: 4rem 10rem;
  height: 100%;
  max-width: 80%;
  margin: 0 auto;

  &__header {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>
