# SSE PDF viewer

A React component to view a PDF document. It's written in TypeScript, and powered by React hooks completely.

```javascript
// Core viewer
import { Viewer } from '@sse-ui/pdf-core';

// Plugins
import { defaultLayoutPlugin } from '@sse-ui/pdf-default-layout';

// Import styles
import '@sse-ui/pdf-core/lib/styles/index.css';
import '@sse-ui/pdf-default-layout/lib/styles/index.css';

// Create new plugin instance
const defaultLayoutPluginInstance = defaultLayoutPlugin();

<Viewer
    fileUrl='/assets/pdf-open-parameters.pdf'
    plugins={[
        // Register plugins
        defaultLayoutPluginInstance,
        ...
    ]}
/>
```

## Features

**Basic features**

-   [x] Support password protected document
-   [x] Zooming: Support custom levels such as actual size, page fit, and page width
-   [x] Navigation between pages
-   [x] Can go to the first and last pages quickly
-   [x] Search for text
-   [x] Preview page thumbnails
-   [x] View and navigate the table of contents
-   [x] List and download attachments
-   [x] Rotating
-   [x] Text selection and hand tool modes
-   [x] Different scrolling modes
-   [x] Full screen mode
-   [x] Can open a file from local. Users can drag and drop a local file to view it
-   [x] Download file
-   [x] View the document properties
-   [x] Support SSR
-   [x] Print
-   [x] Theming
-   [x] Dark mode
-   [x] Accessibility

**Customization**

-   [x] The toolbar can be customized easily
-   [x] All text items can be localized in another language

<!-- ## License -->

<!-- You have to purchase a Commercial License at the [official website](https://react-pdf-viewer.dev). -->

## About

This project is developed by _SSE World_. I love building products and sharing knowledge.

-   [DEV](https://dev.to/sseworld)
-   [Github](https://github.com/sseworld)
