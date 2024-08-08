# UnitySelect

UnitySelect is a Visual Studio Code extension that allows you to easily select assets in Unity directly from VSCode.

## Features

- Right-click on a file in the VSCode explorer and select "Select in Unity" to highlight the corresponding asset in the Unity Editor.
- Use the command palette or a keyboard shortcut to select the asset of the currently open file in Unity.

## Installation

1. Install the extension from the Visual Studio Code Marketplace.
2. Configure the port number used to communicate with Unity if different from the default 50000.

## Usage

### Selecting an Asset from the Explorer

1. Right-click on a file in the VSCode explorer.
2. Choose "Select in Unity" from the context menu.
3. The corresponding asset will be highlighted in the Unity Editor.

### Selecting an Asset from the Editor

1. Open a file in the VSCode editor.
2. Use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and type "Select in Unity from Editor".
3. Alternatively, use the default keyboard shortcut `Ctrl+Alt+U` to trigger the command.
4. The corresponding asset will be highlighted in the Unity Editor.

## Configuration

You can configure the port number used to communicate with Unity through the VSCode settings:

1. Open the command palette and type "Preferences: Open Settings (UI)".
2. Search for "UnitySelect".
3. Adjust the port number as needed.

## Requirements

- Unity Editor running with the appropriate script to listen for commands.
- The default port number is 50000, but it can be configured in the extension settings.

## Known Issues

- Make sure the Unity Editor is running and listening on the specified port.
- Ensure the file paths start with "Assets" to be correctly recognized by the extension.

## Release Notes

### 0.0.1

- Initial release of UnitySelect.

---

Please report any issues or feature requests on the [GitHub repository](https://github.com/veyselerCS/UnitySelect-VSCode).

## License

MIT License. See [LICENSE](LICENSE) for more information.
