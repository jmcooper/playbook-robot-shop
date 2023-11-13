<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  position: relative;
  font-size: 15px;
  padding: 15px 25px;
  background-color: var(--color-secondary);
  color: #fff;
  border: 0;
  box-shadow: none;
  border-radius: 5px;
  cursor: pointer;
}

button::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1em;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 20px var(--color-secondary-light);
}

button:active::after {
  box-shadow: 0 0 0 0 var(--color-secondary-light);
  position: absolute;
  border-radius: 1em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

button:disabled {
  background-color: #777;
}

button.cta {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--color-primary);
  color: #ddd;
  transition-duration: 0.4s;
}

button.cta::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 1em;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 20px var(--color-primary-light);
}

button.cta:active::after {
  box-shadow: 0 0 0 0 var(--color-primary-light);
  position: absolute;
  border-radius: 1em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}
</style>