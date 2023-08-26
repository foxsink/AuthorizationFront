<template>
    <div>
        <label
            v-if="$slots.default"
            v-bind="$props.labelOptions"
        ><slot /></label>
        <div class="mt-2">
            <input
                v-bind="$props.inputOptions"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
    import { InputHTMLAttributes, LabelHTMLAttributes } from 'nuxt/dist/app/compat/capi';

    defineProps({
        labelOptions: {
            type: Object as PropType<LabelHTMLAttributes>,
            default: () => {
                return { isLabel: false };
            },
        },
        inputOptions: {
            required: true,
            type: Object as PropType<InputHTMLAttributes>,
            default: () => {},
        },
        modelValue: {
            type: String,
            default: '',
        },
    });

    defineEmits<{(e: 'update:modelValue'): void}>();

</script>

<style scoped lang="scss">
</style>
