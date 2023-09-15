import { SetupContext, ComponentOptions, LabelHTMLAttributes, InputHTMLAttributes } from 'vue';

type FieldProps = {
    config?: {
        labelString?: string,
        labelAttrs?: LabelHTMLAttributes,
        inputAttrs?: InputHTMLAttributes,
    },
    modelValue?: string,
};

type ButtonProps = {
    content?: string,
};

export const useRenderComponents = () => {
    const Button = (
        props: ButtonProps & ComponentOptions,
        { attrs, slots }: SetupContext,
    ) => {
        return (
            <button class="flex w-full justify-center rounded-md" { ...attrs }>
                { slots.default?.() ?? props.content }
            </button>
        );
    };

    const Field = (
        props: FieldProps & ComponentOptions,
        { slots, emit }: SetupContext,
    ) => {
        return (
            <div>
                { props.config?.labelString
                    ? <label
                        {...props.config?.labelAttrs}>
                        { slots.default?.() ?? props.config?.labelString ?? '' }
                    </label>
                    : ''
                }
                {
                    slots.input?.() ??
                        <input
                            {...props.config?.inputAttrs}
                            value={props.modelValue}
                            onInput={(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)} />
                }
            </div>
        );
    };

    return {
        Button,
        Field,
    };
};
