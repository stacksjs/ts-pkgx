/**
 * **md4c** - Package from pantry: github.com/mity/md4c
 *
 * @domain `github.com/mity/md4c`
 *
 * @install `launchpad install github.com/mity/md4c`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommitymd4c
 * console.log(pkg.name)        // "md4c"
 * console.log(pkg.description) // "Package from pantry: github.com/mity/md4c"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mity/md4c.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommitymd4cPackage = {
  /**
   * The display name of this package.
   */
  name: 'md4c' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mity/md4c' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mity/md4c' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mity/md4c' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mity/md4c -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mity/md4c' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mity/md4c/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcommitymd4cPackage = typeof githubcommitymd4cPackage
