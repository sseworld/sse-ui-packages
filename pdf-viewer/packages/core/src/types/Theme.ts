/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export interface Theme {
    name: string;
    colors: {
        primary: string;
        // Foreground content color used on primary color
        primaryContent?: string;
        secondary: string;
        secondaryContent?: string;
        accent: string;
        accentContent?: string;
        neutral: string;
        neutralContent?: string;
        base: string;
        baseDarker?: string;
        baseMoreDarker?: string;
        baseContent?: string;
        error?: string;
        errorContent?: string;
    };
    radius: {
        sm: string;
        md: string;
        lg: string;
    };
}
