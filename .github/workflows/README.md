# GitHub Workflows

This directory contains GitHub Actions workflows for continuous integration, deployment, and maintenance.

## Workflows

### CI Workflow (`ci.yml`)

The CI workflow is triggered on push to main and pull requests. It runs tests and linting to ensure code quality.

### Release Workflow (`release.yml`)

The release workflow is triggered on release creation. It builds and publishes the package to NPM.

### Update Packages Workflow (`update-packages.yml`)

The update packages workflow automatically keeps package data up-to-date:

- **Schedule**: Runs hourly to check for updates
- **Manual Trigger**: Can be triggered manually via the GitHub Actions UI
- **Actions**:
  - Updates all packages with the latest data from pkgx.dev
  - Regenerates the index.ts file
  - Commits and pushes changes when new package data is available

## Development

When adding new workflows, please follow these guidelines:

1. Use consistent naming for workflow files
2. Update this README to document the new workflow
3. Test workflows thoroughly before merging
