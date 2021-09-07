import { InputGroup, InputLeftElement, Input, Box, Text, Flex, InputProps } from '@chakra-ui/react';
import { FieldConfig, useField } from '@reactive-forms/core';
import React, { useCallback } from 'react';
import { PlusSquareIcon } from '@chakra-ui/icons';

export type ColorFieldProps = FieldConfig<string> &
    Omit<InputProps, 'value' | 'onChange' | 'onBlur'> & {
        label?: string;
    };

export const ColorField = ({ name, validator, schema, label, ...other }: ColorFieldProps) => {
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

    const onBlur = useCallback(
        (e: React.FocusEvent<HTMLInputElement>) => {
            setTouched({ $touched: true });
        },
        [setTouched]
    );

    return (
        <Flex flexDir="column" alignItems="flex-start">
            {label && (
                <Text color="gray.300" fontSize="sm">
                    {label}
                </Text>
            )}
            <InputGroup>
                <InputLeftElement>
                    <Box position="relative">
                        <Input
                            type="color"
                            name={name}
                            variant="filled"
                            value={value}
                            onChange={onChange}
                            opacity="0"
                            zIndex="2"
                            cursor="pointer"
                        />
                    </Box>
                    <Box position="absolute">
                        {value ? (
                            <Box backgroundColor={value} borderRadius="50%" width="10px" height="10px" />
                        ) : (
                            <PlusSquareIcon marginTop="-5px" />
                        )}
                    </Box>
                </InputLeftElement>
                <Input name={name} variant="filled" value={value} onChange={onChange} onBlur={onBlur} {...other} />
            </InputGroup>
        </Flex>
    );
};
