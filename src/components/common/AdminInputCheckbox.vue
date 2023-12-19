<template>
  <input
    class="appearance-none outline-none cursor-pointer w-[24px] h-[24px] rounded-[7px] border-[2px] border-gray-400 border-solid"
    type="checkbox"
    :class="$style.checkbox"
  />
</template>

<style lang="scss" module>
.checknox:checked {
  appearance: auto;
}
</style>
