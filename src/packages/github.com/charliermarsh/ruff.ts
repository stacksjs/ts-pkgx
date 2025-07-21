/**
 * **ruff** - Package from pantry: github.com/charliermarsh/ruff
 *
 * @domain `github.com/charliermarsh/ruff`
 *
 * @install `launchpad install github.com/charliermarsh/ruff`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcharliermarshruff
 * console.log(pkg.name)        // "ruff"
 * console.log(pkg.description) // "Package from pantry: github.com/charliermarsh/ruff"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/charliermarsh/ruff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcharliermarshruffPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/charliermarsh/ruff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/charliermarsh/ruff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/charliermarsh/ruff' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/charliermarsh/ruff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/charliermarsh/ruff' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/charliermarsh/ruff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcharliermarshruffPackage = typeof githubcomcharliermarshruffPackage
