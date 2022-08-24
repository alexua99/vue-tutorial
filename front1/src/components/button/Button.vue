<script setup>
import './index.css'

defineProps({
    btnText: {
        type: String,
        required: true
    }
})
</script>

<template>
    <button class="button">
        {{ btnText }}
    </button>

</template>