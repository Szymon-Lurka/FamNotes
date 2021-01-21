import {
    StyledLabel,
    StyledWarningInput,
} from '../../../theme/AccountPanelTemplateStyles';
import Input from '../../atoms/Input/Input';

const BadLogin = ({ loginFailedMessage, handleChange, handleBlur, value }) => (
    <>
        {
            // If login or password is incorrect
            loginFailedMessage ? (
                <StyledLabel>
                    { loginFailedMessage}
                    < StyledWarningInput
                        placeholder="LOGIN"
                        type="text"
                        name="login"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={value}
                    />
                </StyledLabel >
            ) : (
                    <Input
                        placeholder="LOGIN"
                        type="text"
                        name="login"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={value}
                    />
                )}
    </>
);

export default BadLogin;