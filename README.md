# FrontEnd Bootcamp

#### Git commands

After running git add ., use this command to see which files are staged:

- View Staged Files Before Committing: `git status`

Alternatively, you can list the staged files (without showing the diff) using:

- List All Staged Files: `git diff --name-only --cached`

This command shows a list of files changed in the most recent commit:

- View the Files in the Last Commit: `git show --name-only`

This option keeps your changes in the staging area, allowing you to re-commit them if needed:

- Undo the Last Commit but Keep the Changes Staged: `git reset --soft HEAD~1`

Undo the Last Commit and Unstage the Changes

- Undo the Last Commit and Unstage the ChangesL: `git reset --mixed HEAD~1`

If .env is already being tracked, .gitignore won’t stop it from being committed. You’ll need to untrack it by running:

- Remove file from Tracking (if it was previously added): `git rm --cached ./path/to/.env`

The standard name for environment files is typically:

- `.env`
- `.env.development`
- `.env.production`
- `.env.test`