import * as React from 'react';
import { ChakraProvider, Box, extendTheme, Heading, VStack, Button, Link, Center } from '@chakra-ui/react';
import { StatusPreview } from './StatusPreview';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ReactiveFormProvider, useForm } from '@reactive-forms/core';
import { Form } from '@reactive-forms/dom';
import { ColorField } from './ColorField';
import { StringField } from './StringField';
import { IoMdArrowDown } from 'react-icons/io';
import { downloadSvg } from '../utils/downloadSvg';
import './App.scss';

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
                        <Box display="flex" flexDirection="column" justifyContent="space-between" h="100vh">
                            <Box>
                                <Heading as="h2" size="xl" textTransform="uppercase" padding="20px 0 0 0">
                                    Status icon generator
                                </Heading>
                            </Box>
                            <Center w="100%" p={4} color="white" h="100%">
                                <StatusPreview />
                            </Center>
                            <Box w="100%">
                                <Box w="100%" p={4} color="white" padding="0">
                                    <div>
                                        <svg
                                            className="waves"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 24 150 28"
                                            preserveAspectRatio="none"
                                            shape-rendering="auto"
                                        >
                                            <defs>
                                                <path
                                                    id="gentle-wave"
                                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                                />
                                            </defs>
                                            <g className="parallax">
                                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(46, 136, 137)" />
                                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(42, 116, 119)" />
                                                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgb(39, 97, 100)" />
                                            </g>
                                        </svg>
                                    </div>
                                </Box>
                                <Box
                                    w="100%"
                                    p={4}
                                    color="white"
                                    bg="#276164"
                                    justifyContent="center"
                                    display="flex"
                                    position="relative"
                                >
                                    <Link
                                        href="https://github.com/ArtiomTr/status-icon-generator"
                                        isExternal
                                        position="absolute"
                                        left="20px"
                                        bottom="20px"
                                    >
                                        Github <ExternalLinkIcon mx="2px" />
                                    </Link>
                                    <Box w="300px" padding="30px 0">
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
                                </Box>
                            </Box>
                        </Box>
                    )}
                </ReactiveFormProvider>
            </Box>
        </ChakraProvider>
    );
};
