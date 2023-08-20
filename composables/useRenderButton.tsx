import { SetupContext, ComponentOptions } from 'vue';

type ButtonProps = {
    content?: string
}

function FComponent (
    props: ButtonProps & ComponentOptions,
    { attrs, slots }: SetupContext,
) {
    return (
        <button class="flex w-full justify-center rounded-md" { ...attrs }>
            { slots.default?.() ?? props.content }
        </button>
    );
}

export default () => FComponent;
