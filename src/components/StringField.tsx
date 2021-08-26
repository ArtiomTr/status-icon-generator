import { Flex, Input, InputProps, Text } from '@chakra-ui/react';
import { FieldConfig, useField } from '@reactive-forms/core';
import React, { useCallback } from 'react';

export type StringFieldProps = FieldConfig<string> &
    Omit<InputProps, 'value' | 'onChange'> & {
        label?: string;
    };

export const StringField = ({ name, validator, schema, label, onBlur, ...other }: StringFieldProps) => {
    const {
        value,
        // meta: { error, touched },
        control: { setValue, setTouched },
    } = useField({ name, validator, schema });

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
        },
        [setValue]
    );

    const handleBlur = useCallback(
        (e: React.FocusEvent<HTMLInputElement>) => {
            setTouched({ $touched: true });
            onBlur?.(e);
        },
        [setTouched, onBlur]
    );

    return (
        <Flex flexDir="column" alignItems="flex-start">
            {label && (
                <Text color="gray.300" fontSize="sm">
                    {label}
                </Text>
            )}
            <Input name={name} variant="filled" value={value} onChange={onChange} onBlur={handleBlur} {...other} />
        </Flex>
    );
};
