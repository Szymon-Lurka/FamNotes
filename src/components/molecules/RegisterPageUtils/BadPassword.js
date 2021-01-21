import {
    StyledLabel,
    StyledWarningInput,
} from '../../../theme/AccountPanelTemplateStyles';
import Input from '../../atoms/Input/Input';

const BadLogin = ({ handleChange, handleBlur, value, infoMessage }) => (
    <>
        {/* If password is incorrect return normal login input  */}
        {infoMessage === '' || infoMessage.length === 68 ? (
            <Input
                placeholder="LOGIN"
                type="text"
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={value.login}
            />
        ) : null}
        {/* If password is incorrect return warning input */}
        {infoMessage.length === 68 ? (
            <StyledLabel>
                {infoMessage}
                <StyledWarningInput
                    placeholder="HASŁO"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value.password}
                />
            </StyledLabel>
        ) : (
                <Input
                    placeholder="HASŁO"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value.password}
                />
            )}
    </>
)

export default BadLogin;
