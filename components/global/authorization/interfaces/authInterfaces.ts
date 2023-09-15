import { AuthorizationFieldsIdentifier } from '.';

interface LoginLabels {
    [AuthorizationFieldsIdentifier.EMAIL]?: String,
    [AuthorizationFieldsIdentifier.PASSWORD]?: String,
}
interface RegisterLabels {
    [AuthorizationFieldsIdentifier.NAME]?: String,
    [AuthorizationFieldsIdentifier.SURNAME]?: String,
    [AuthorizationFieldsIdentifier.PHONE]?: String,
    [AuthorizationFieldsIdentifier.EMAIL]?: String,
    [AuthorizationFieldsIdentifier.PASSWORD]?: String,
}

export type AuthLabelsInterface = LoginLabels | RegisterLabels;
