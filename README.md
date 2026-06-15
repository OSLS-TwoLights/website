# TLPW Website

Static website ready to upload to GitHub and deploy to Azure Static Web Apps.

## Folder structure

`index.html` is at the repository root, which is what GitHub and Azure expect for a simple static website.

## Upload to GitHub

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Commit to the `main` branch.

Or use Git:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Deploy to Azure Static Web Apps

1. Go to Azure Portal.
2. Create a new **Static Web App**.
3. Choose GitHub as the source.
4. Select this repository and the `main` branch.
5. Use these build settings:

```text
App location: /
Api location: leave blank
Output location: leave blank
```

After setup, every push to GitHub will automatically deploy to Azure.
