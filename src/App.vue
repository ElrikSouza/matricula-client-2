<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Log In</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/enrollment">Matrícula</router-link> |
      <router-link to="/enrollment/edit">Editar Matrículas</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

:root {
  --primary-color: #52c876;
  --primary-color-dark: #388a51;
  --secondary-color: #525ec8;
  --secondary-color-dark: #38398a;
  --danger-color: #e4491a;
  --danger-color-dark: #c03c14;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
