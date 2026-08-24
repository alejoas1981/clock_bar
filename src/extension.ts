import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem,
    timer: NodeJS.Timeout;

/**
 * Formats current time to HH:MM:SS string in terminal style.
 * @returns Formatted time string in HH:MM:SS format.
 */
export function getCurrentTime(): string {
    const now = new Date(),
        hours = now.getHours().toString().padStart(2, '0'),
        minutes = now.getMinutes().toString().padStart(2, '0'),
        seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

/**
 * Updates the status bar item with current time.
 * Sets the text, tooltip, and visibility of the status bar item.
 */
export function updateTime(): void {
    const time = getCurrentTime();
    statusBarItem.text = `$(clock) ${time}`;
    statusBarItem.tooltip = 'Current time';
    statusBarItem.show();
}

/**
 * Activates the extension and initializes the status bar clock.
 * Creates a status bar item on the left side and starts updating time every second.
 * @param context - Extension context provided by VS Code.
 */
export function activate(context: vscode.ExtensionContext): void {
    statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
    );

    updateTime();
    timer = setInterval(updateTime, 1000);
    context.subscriptions.push(statusBarItem);
}

/**
 * Deactivates the extension and cleans up resources.
 * Clears the update timer and disposes the status bar item.
 */
export function deactivate(): void {
    if (timer) {
        clearInterval(timer);
    }
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}
