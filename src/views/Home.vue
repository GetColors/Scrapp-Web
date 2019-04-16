<template>
  <div id="home">
    <header></header>
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
    </aside>
    <div id="content">
      <ul>
        <li>
          <div class="project_box"><p>Wena conchetumare</p></div>
        </li>
        <li>
          <div class="project_box"><p>Wena conchetumare</p></div>
        </li>
        <li>
          <div class="project_box"><p>Wena conchetumare</p></div>
        </li>
        <li>
          <div class="project_box"><p>Wena conchetumare</p></div>
        </li>
        <li>
          <div class="project_box"><p>Wena conchetumare</p></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
#home {
  display: flex;
  align-content: center;
  justify-content: center;
}
header {
  height: 20vh;
  background-color: dodgerblue;
}
aside {
  width: 20%;
  position: absolute;
  left: 0;
  top: 20vh;
}
#content {
  margin-top: 20vh;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project_box {
  height: 80px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px dodgerblue solid;
}
ul {
  width: 100%;
}
</style>
