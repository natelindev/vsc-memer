// The module 'vscode' contains the VS Code extensibility API
import * as os from 'os';
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { getRandomMeme, memes } from './memes';

function comment(text: string): string {
  const commentStyle: string =
    vscode.workspace.getConfiguration().get('vsc-memer.commentStyle') ?? 'line';

  const lineComment: string =
    vscode.workspace.getConfiguration().get('vsc-memer.lineComment') ?? '//';

  const blockCommentLeft: string =
    vscode.workspace.getConfiguration().get('vsc-memer.blockCommentLeft') ??
    '/*';

  const blockCommentRight: string =
    vscode.workspace.getConfiguration().get('vsc-memer.blockCommentRight') ??
    '*/';

  let eol: string =
    vscode.workspace.getConfiguration().get('files.eol') ?? '\n';

  if (eol === 'auto') {
    eol = os.EOL;
  }

  if (commentStyle === 'line') {
    return text
      .split('\n')
      .map((t) => `${lineComment} ${t}`)
      .join(eol);
  } else if (commentStyle === 'block') {
    return `${blockCommentLeft}${eol}${text}${eol}${blockCommentRight}`;
  }
  vscode.window.showErrorMessage('Invalid comment style configured');
  return text;
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let insertRandomMeme = vscode.commands.registerCommand(
    'vsc-memer.insertRandomMeme',
    () => {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        editor
          .edit((edit) => {
            editor?.selections.forEach((v) =>
              edit.replace(v, comment(getRandomMeme()))
            );
          })
          .then(() => {
            if (editor) {
              editor.selection = new vscode.Selection(
                editor.selection.end,
                editor.selection.end
              );
            }
          });
      }
    }
  );

  let copyRandomMeme = vscode.commands.registerCommand(
    'vsc-memer.copyRandomMeme',
    () => {
      vscode.env.clipboard.writeText(comment(getRandomMeme()));
      vscode.window.showInformationMessage('Random meme copied to clipboard');
    }
  );

  let insertMeme = vscode.commands.registerCommand(
    'vsc-memer.insertMeme',
    () => {
      const options = Object.keys(memes).map((label) => ({ label }));
      const quickPick = vscode.window.createQuickPick();
      quickPick.items = options;
      quickPick.onDidChangeSelection(([{ label }]) => {
        let editor = vscode.window.activeTextEditor;
        if (editor) {
          editor
            .edit((edit) => {
              editor?.selections.forEach((v) =>
                edit.replace(v, comment(memes[label as keyof typeof memes]))
              );
            })
            .then(() => {
              if (editor) {
                editor.selection = new vscode.Selection(
                  editor.selection.end,
                  editor.selection.end
                );
              }
            });
        }
        quickPick.hide();
      });
      quickPick.show();
    }
  );

  let copyMeme = vscode.commands.registerCommand('vsc-memer.copyMeme', () => {
    const options = Object.keys(memes).map((label) => ({ label }));
    const quickPick = vscode.window.createQuickPick();
    quickPick.items = options;
    quickPick.onDidChangeSelection(([{ label }]) => {
      vscode.env.clipboard.writeText(
        comment(memes[label as keyof typeof memes])
      );
      vscode.window.showInformationMessage('Random meme copied to clipboard');
      quickPick.hide();
    });
    quickPick.show();
  });

  context.subscriptions.push(insertRandomMeme);
  context.subscriptions.push(copyRandomMeme);
  context.subscriptions.push(insertMeme);
  context.subscriptions.push(copyMeme);
}

// this method is called when your extension is deactivated
export function deactivate() {}
