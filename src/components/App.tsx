import * as React from 'react';
import { ChakraProvider, Box, Grid, Flex, extendTheme, Heading, VStack, Button, Link } from '@chakra-ui/react';
import { StatusPreview } from './StatusPreview';
import { ReactComponent as Waves } from '../assets/layered-waves-haikei.svg';
import { ReactiveFormProvider, useForm } from '@reactive-forms/core';
import { Form } from '@reactive-forms/dom';
import { ColorField } from './ColorField';
import { StringField } from './StringField';
import { IoMdArrowDown } from 'react-icons/io';
import { downloadSvg } from '../utils/downloadSvg';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
});

export const App = () => {
    const formBag = useForm({
        initialValues: {
            backgroundColor: '',
            iconName: '',
            text: '',
        },
        onSubmit: downloadSvg,
    });

    const tryGetTextFromValue = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value;

        formBag.setFieldValue('text', (old: string) => {
            if (old.trim().length === 0) {
                return value[0];
            }

            return old;
        });
    };

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <ReactiveFormProvider formBag={formBag}>
                    {() => (
                        <Grid templateColumns="300px 1fr" minH="100vh">
                            <Flex
                                justifyContent="space-between"
                                flexDir="column"
                                paddingX="3"
                                backgroundColor="teal.800"
                            >
                                <Heading mt="10" fontSize="xl">
                                    Status icon generator
                                </Heading>
                                <Box>
                                    <Form>
                                        <VStack alignItems="stretch" spacing="2">
                                            <ColorField label="Background color" name="backgroundColor" />
                                            <StringField
                                                onBlur={tryGetTextFromValue}
                                                label="Icon name"
                                                name="iconName"
                                            />
                                            <StringField label="Icon text" name="text" />
                                            <Box>
                                                <Button
                                                    type="submit"
                                                    leftIcon={<IoMdArrowDown size="20px" />}
                                                    marginTop="2"
                                                >
                                                    Download
                                                </Button>
                                            </Box>
                                        </VStack>
                                    </Form>
                                </Box>
                                <Box>
                                    <Link fontSize="sm" href="https://github.com/ArtiomTr/status-icon-generator">
                                        GitHub
                                    </Link>
                                </Box>
                            </Flex>
                            <Flex position="relative" justifyContent="center" alignItems="center">
                                <Box position="absolute" top="0" left="0">
                                    <Waves height="100vh" />
                                </Box>
                                <StatusPreview />
                            </Flex>
                        </Grid>
                    )}
                </ReactiveFormProvider>
            </Box>
        </ChakraProvider>
    );
};
