<template>
  <div id="main">
    <div id="header">
      <iframe
        src="//gifs.com/embed/wolfgif-oQM7J3"
        frameborder="0"
        scrolling="no"
        width="100%"
        style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);"
      ></iframe>
    </div>

    <div id="intro" class="container-black">
      <div class="video-container">
        <div>
          <iframe
            src="https://www.youtube.com/embed/FKqDLFPW3TY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <h1 class="title">RISE EVENT</h1>
      <h5 id="date-location">January {{ dates }} at {{ location }}</h5>
    </div>
    <div class="container-white ">
      <h1 style="color: #F7D200; padding-bottom:20px;">
        What is the Rise Event?
      </h1>
      <div class="grid">
        <div style="float:left">
          <p>
            When you have a great story about how your product or service was
            built to change lives, share it. The "About Us" page is a great
            place for it to live, too. Good stories humanize your brand,
            providing context and meaning for your product. What’s more, good
            stories are sticky -- which means people are more likely to connect
            with them and pass them on.
          </p>
        </div>
        <div style="float:right">
          <img
            class="rise-img"
            src="../assets/zeynep-emecikli-1119505-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      dates: "9-10",
      location: "conference center"
    };
  }
};
</script>

<!-- styling for the component -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato|Marcellus|Vollkorn|Titillium+Web");
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: white;
}
#header {
  padding-top: 30px;
  background-color: black;
}
.rise-img {
  width: 100%;
  min-width: 75%;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

h1 {
  font-size: 36px;
  font-size: 2.5vw;
  font-family: "Titillium Web";
  font-family: "Vollkorn";
  font-family: "Marcellus";
  color: white;
  margin-bottom: 0;
  padding: 0;
}
h5 {
  font-size: 36px;
  font-size: 1.75vw;
  // font-family: "Titillium Web";
  font-family: "Lato";
  color: #f0c429;
  margin: 0px;
}
p {
  text-align: left;
}

.container-white {
  padding: 30px 100px;
  background-color: #ececec;
}
.container-black {
  padding: 30px 0px;
  background-color: black;
}
.video-container {
  max-width: 1000px;
  margin: auto;
}
.video-container div {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  padding-top: 35px;
  overflow: hidden;
  margin: 0px 30px;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
