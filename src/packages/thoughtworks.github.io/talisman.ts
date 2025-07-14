/**
 * **talisman** - Package from pantry: thoughtworks.github.io/talisman
 *
 * @domain `thoughtworks.github.io/talisman`
 *
 * @install `launchpad install thoughtworks.github.io/talisman`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.thoughtworksgithubiotalisman
 * console.log(pkg.name)        // "talisman"
 * console.log(pkg.description) // "Package from pantry: thoughtworks.github.io/tal..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thoughtworks-github-io/talisman.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thoughtworksgithubiotalismanPackage = {
  /**
   * The display name of this package.
   */
  name: 'talisman' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thoughtworks.github.io/talisman' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: thoughtworks.github.io/talisman' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install thoughtworks.github.io/talisman' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +thoughtworks.github.io/talisman -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install thoughtworks.github.io/talisman' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/thoughtworks.github.io/talisman/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ThoughtworksgithubiotalismanPackage = typeof thoughtworksgithubiotalismanPackage
