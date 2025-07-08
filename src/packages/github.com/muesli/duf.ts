/**
 * **duf** - Package from pantry: github.com/muesli/duf
 *
 * @domain `github.com/muesli/duf`
 *
 * @install `launchpad install github.com/muesli/duf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommuesliduf
 * console.log(pkg.name)        // "duf"
 * console.log(pkg.description) // "Package from pantry: github.com/muesli/duf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/muesli/duf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommueslidufPackage = {
  /**
   * The display name of this package.
   */
  name: 'duf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/muesli/duf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/muesli/duf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/muesli/duf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/muesli/duf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/muesli/duf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/muesli/duf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommueslidufPackage = typeof githubcommueslidufPackage
