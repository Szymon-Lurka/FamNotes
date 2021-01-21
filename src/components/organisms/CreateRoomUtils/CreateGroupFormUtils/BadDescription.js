import React from 'react';
import {
    StyledTextArea,
    WarningTextArea,
    WarningLabel,
} from '../../../../views/styles/CreateRoomStyles';

const BadName = ({ failedMessage = 0, onBlur, onChange, value, isSubmitted }) => (
    <>
        {/* If group description is longer than 300 marks */}
        {failedMessage !== undefined && failedMessage !== null && failedMessage.length === 41 ? (
            <WarningLabel>
                {failedMessage}
                <WarningTextArea
                    as="textarea"
                    onBlur={onBlur}
                    onChange={onChange}
                    values={value}
                    name="description"
                    placeholder="Opis grupy"
                />
            </WarningLabel>
        ) : (
                <StyledTextArea
                    as="textarea"
                    onBlur={onBlur}
                    onChange={onChange}
                    values={value}
                    name="description"
                    placeholder="Opis grupy"
                    anim={isSubmitted}
                />
            )}
    </>
);

export default BadName;
