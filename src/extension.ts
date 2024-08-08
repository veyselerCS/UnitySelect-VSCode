import * as vscode from 'vscode';
import * as net from 'net';

export function activate(context: vscode.ExtensionContext) {
    let disposableExplorer = vscode.commands.registerCommand('extension.selectInUnity', async (uri: vscode.Uri) => {
        const filePath = uri.fsPath;
        await selectInUnity(filePath);
    });

    let disposableEditor = vscode.commands.registerCommand('extension.selectInUnityFromEditor', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const filePath = editor.document.uri.fsPath;
            await selectInUnity(filePath);
        } else {
            vscode.window.showErrorMessage('No active editor found');
        }
    });

    context.subscriptions.push(disposableExplorer, disposableEditor);
}

async function selectInUnity(filePath: string) {
    const assetsIndex = filePath.indexOf('Assets');
    if (assetsIndex === -1) {
        vscode.window.showErrorMessage(`The file path does not contain "Assets": ${filePath}`);
        return;
    }
    const relativePath = filePath.substring(assetsIndex);
    const command = `SelectAsset.SelectAssetInProject ${relativePath}`;
    sendCommandToUnity(command);
}

function sendCommandToUnity(command: string) {
    const config = vscode.workspace.getConfiguration('unitySelect');
    const port = config.get<number>('port', 50000);

    const client = new net.Socket();

    try {
        client.connect(port, '127.0.0.1', async () => {
            console.log('Connected to Unity');
            await client.write(command);
            client.destroy();
        });
    } catch (err) {
		const error = err as Error;
        vscode.window.showErrorMessage(`Error connecting to Unity: ${error.message}`);
        console.error(`Error: ${err}`);
    }
}

export function deactivate() {}
