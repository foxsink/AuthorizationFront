<template>
    <component
        :is="pageState"
        @change-page="changePage"
    />
</template>

<script setup lang="ts">
    import { AuthorizationPageState, AuthorizationPageFormat } from '~/components/global/authorization/interfaces/authEnums';

    const props = defineProps({
        defaultPage: {
            type: String as PropType<AuthorizationPageState>,
            default: AuthorizationPageState.LOGIN,
        },
        availablePages: {
            type: Array as PropType<AuthorizationPageState[]>,
            default: () => [AuthorizationPageState.LOGIN, AuthorizationPageState.REGISTER],
        },
        pageFormat: {
            type: Number as PropType<AuthorizationPageFormat>,
            default: AuthorizationPageFormat.PAGE,
        },
    });

    const { defaultPage } = toRefs(props);
    const pageState = ref(defaultPage.value);

    const changePage = (e: AuthorizationPageState) => {
        pageState.value = e;
    };

</script>

<style scoped lang="scss">
</style>
