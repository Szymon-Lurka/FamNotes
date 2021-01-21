import React from 'react';
import {
    StyledInput,
    WarningInput,
    WarningLabel,
} from '../../../../views/styles/CreateRoomStyles';

const BadTag = ({ failedMessage = 0, onBlur, onChange, value, isSubmitted }) => (
    <>
        {/* If group tag is too long or already taken */}
        {failedMessage !== undefined && failedMessage !== null && failedMessage.length === 44 ? (
            <WarningLabel>
                {failedMessage}
                <WarningInput
                    onBlur={onBlur}
                    onChange={onChange}
                    values={value}
                    name="tag"
                    placeholder="Tag grupy"
                />
            </WarningLabel>
        ) : (
                <StyledInput
                    onBlur={onBlur}
                    onChange={onChange}
                    values={value}
                    name="tag"
                    placeholder="Tag grupy"
                    third={!isSubmitted}
                />
            )}
    </>
);

export default BadTag;
