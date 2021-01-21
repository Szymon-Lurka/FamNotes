import React from 'react';
import {
    StyledInput,
    WarningInput,
    WarningLabel,
} from '../../../../views/styles/CreateRoomStyles';

const BadName = ({ failedMessage = 0, onBlur, onChange, value, isSubmitted }) => (
    <>
        {/* If group already exist or name is too short/long */}
        {failedMessage !== undefined && failedMessage !== null && failedMessage.length === 24 ? (
            <WarningLabel>
                {failedMessage}
                <WarningInput
                    onBlur={onBlur}
                    onChange={onChange}
                    values={value}
                    name="name"
                    placeholder="Nazwa grupy"
                />
            </WarningLabel>
        ) : (
                <StyledInput
                    onBlur={onBlur}
                    onChange={onChange}
                    values={value}
                    name="name"
                    placeholder="Nazwa grupy"
                    anim={!isSubmitted}
                />
            )}
    </>
);

export default BadName;
