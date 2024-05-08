/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { LoadingStatus } from './LoadingStatus';
import { PasswordStatus } from '../structs/PasswordStatus';

export class AskForPasswordState extends LoadingStatus {
    public verifyPassword: (password: string) => void;
    public passwordStatus: PasswordStatus;

    constructor(verifyPassword: (password: string) => void, passwordStatus: PasswordStatus) {
        super();
        this.verifyPassword = verifyPassword;
        this.passwordStatus = passwordStatus;
    }
}
