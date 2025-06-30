/**
 * **goose** - Package from pantry: pressly.github.io/goose
 *
 * @domain `pressly.github.io/goose`
 *
 * @install `launchpad install pressly.github.io/goose`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.presslygithubiogoose
 * console.log(pkg.name)        // "goose"
 * console.log(pkg.description) // "Package from pantry: pressly.github.io/goose"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pressly-github-io/goose.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const presslygithubiogoosePackage = {
  /**
   * The display name of this package.
   */
  name: 'goose' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pressly.github.io/goose' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pressly.github.io/goose' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pressly.github.io/goose' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pressly.github.io/goose -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pressly.github.io/goose' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pressly.github.io/goose/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PresslygithubiogoosePackage = typeof presslygithubiogoosePackage
