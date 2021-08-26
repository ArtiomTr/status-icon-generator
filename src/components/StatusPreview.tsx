import { Flex } from '@chakra-ui/react';
import { useFieldValue } from '@reactive-forms/core';
import React, { useEffect, useState } from 'react';
import TextToSVG from 'text-to-svg';
import { parse } from 'opentype.js';
import { downloadFont } from '../utils/downloadFont';

const colorStrong = 'var(--chakra-colors-gray-600)';
const colorLight = 'var(--chakra-colors-gray-700)';

export const StatusPreview = () => {
    const [backgroundColor] = useFieldValue<string>('backgroundColor');
    const [text] = useFieldValue<string>('text');

    const [textToSvgInstance, setTextToSvgInstance] = useState<TextToSVG>();

    useEffect(() => {
        const run = async () => {
            const font = await downloadFont('Roboto-Regular.ttf');

            setTextToSvgInstance(new TextToSVG(parse(font)));
        };

        run();
    }, []);

    return (
        <Flex
            backgroundImage={`linear-gradient(${colorStrong} 2px, transparent 2px), linear-gradient(90deg, ${colorStrong} 2px, transparent 1px), linear-gradient(${colorLight} 1px, transparent 1px), linear-gradient(90deg, ${colorLight} 1px, transparent 1px);`}
            backgroundSize="100px 100px, 100px 100px, 20px 20px, 20px 20px"
            backgroundPosition="-50px -50px"
            justifyContent="center"
            alignItems="center"
            width={500}
            height={500}
        >
            <svg width={250} height={250} viewBox="0 0 30 30" fill={backgroundColor} xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="2" fill="inherit"></rect>
                <path
                    fill="#fff"
                    d={textToSvgInstance?.getD(text, { fontSize: 16, x: 15, y: 15, anchor: 'center middle' })}
                />
            </svg>
        </Flex>
    );
};
