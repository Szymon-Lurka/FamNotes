import {
    StyledLabel,
    StyledWarningInput,
} from '../../../theme/AccountPanelTemplateStyles';

const BadLogin = ({ handleChange, handleBlur, value, infoMessage }) => (
    <>
        {/* If login already exist in DATABASE or is incorrect  */}
        {infoMessage.length === 29 || infoMessage.length === 71 ? (
            <StyledLabel>
                {infoMessage}
                <StyledWarningInput
                    placeholder="LOGIN"
                    type="text"
                    name="login"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                />
            </StyledLabel>
        ) : null}
    </>
)

export default BadLogin;