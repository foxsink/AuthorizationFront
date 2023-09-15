import { LabelHTMLAttributes, InputHTMLAttributes } from 'vue';
import { AuthorizationFieldsIdentifier } from '.';

export type Field = {
    labelString?: string,
    labelAttrs?: LabelHTMLAttributes,
    inputAttrs: InputHTMLAttributes,
};

type LoginField = [AuthorizationFieldsIdentifier.EMAIL] | [AuthorizationFieldsIdentifier.PASSWORD];

type RegisterField =
    [AuthorizationFieldsIdentifier.NAME] |
    [AuthorizationFieldsIdentifier.SURNAME] |
    [AuthorizationFieldsIdentifier.PHONE] |
    [AuthorizationFieldsIdentifier.EMAIL] |
    [AuthorizationFieldsIdentifier.PASSWORD]
;

export type AuthFieldsType =
    LoginField: Field;
