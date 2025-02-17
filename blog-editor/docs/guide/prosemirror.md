---
tableOfContents: true
---

# Accessing ProseMirror internals

Tiptap is built on top of ProseMirror, which has a pretty powerful API. To access it, we provide the package `@tiptap/pm`. This package provides all important ProseMirror packages like `prosemirror-state`, `prosemirror-view` or `prosemirror-model`. Using the package for custom development makes sure that you always have the same version of ProseMirror which is used by Tiptap as well. This way, we can make sure that Tiptap and all extensions are compatible with each other and prevent version clashes. Another plus is that you don't need to install all ProseMirror packages manually, especially if you are not using npm or any other package manager that supports automatic peer dependency resolution.

Installation:

```bash
npm i @tiptap/pm
```

After that you can access all internal ProseMirror packages like this:

```js
// this example loads the EditorState class from the ProseMirror state package
import { EditorState } from '@sseui/pm/state'
```

The following packages are available:

- `@sseui/pm/changeset`
- `@sseui/pm/collab`
- `@sseui/pm/commands`
- `@sseui/pm/dropcursor`
- `@sseui/pm/gapcursor`
- `@sseui/pm/history`
- `@sseui/pm/inputrules`
- `@sseui/pm/keymap`
- `@sseui/pm/markdown`
- `@sseui/pm/menu`
- `@sseui/pm/model`
- `@sseui/pm/schema-basic`
- `@sseui/pm/schema-list`
- `@sseui/pm/state`
- `@sseui/pm/tables`
- `@sseui/pm/trailing-node`
- `@sseui/pm/transform`
- `@sseui/pm/view`

You can find out more about those libraries in the [ProseMirror documentation](https://prosemirror.net/docs/ref).
