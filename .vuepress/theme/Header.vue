<template>
    <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">
            <b-icon-house></b-icon-house>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/create-token/" :active="page === 'Generator'">Create BEP20 Token</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" :active="page === 'Home'">Home</b-nav-item>
                <b-nav-item to="/docs/" :active="page === 'Docs'">Docs</b-nav-item>
                <b-nav-item target="_blank" href="https://medium.com/erc20generator"><small>Blog</small></b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      page: {
        type: String,
        default: null,
      },
    },
  };
</script>
