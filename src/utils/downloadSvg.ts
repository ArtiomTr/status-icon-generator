import TextToSVG from 'text-to-svg';
import { parse } from 'opentype.js';
import { downloadFont } from './downloadFont';

export const downloadSvg = async ({
    backgroundColor,
    text,
    iconName,
}: {
    backgroundColor: string;
    text: string;
    iconName: string;
}): Promise<void> => {
    const font = await downloadFont('Roboto-Regular.ttf');
    const textToSvgInstance = new TextToSVG(parse(font));

    const content = `<svg viewBox="0 0 30 30" fill="${backgroundColor}" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="2" fill="inherit"></rect><path fill="#fff" d="${textToSvgInstance.getD(
        text,
        { fontSize: 16, x: 15, y: 15, anchor: 'center middle' }
    )}"></path></svg>`;

    const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(content);

    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', url);
    downloadLink.setAttribute('download', `${iconName}.svg`);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
