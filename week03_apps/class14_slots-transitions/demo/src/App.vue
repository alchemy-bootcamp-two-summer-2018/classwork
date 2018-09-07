<template>
  <div> 
    <header>
      <nav>
          <RouterLink to="/">Home</RouterLink>
          &nbsp;
          <RouterLink to="/slots">Slots</RouterLink>
          &nbsp;
          <RouterLink to="/transitions">Transitions</RouterLink>
          &nbsp;
        </nav>
    </header>
    <main>
      <transition name="fade">
        <RouterView/>
      </transition>
    </main>
  </div>
</template>

<script>

export default {
 
};
</script>

<style>
section {
  position: relative;
  min-height: 200px;
}
</style>

