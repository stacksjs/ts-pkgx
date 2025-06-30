/**
 * **mercure.rocks** - Package from pantry: mercure.rocks
 *
 * @domain `mercure.rocks`
 *
 * @install `launchpad install mercure.rocks`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mercurerocks
 * console.log(pkg.name)        // "mercure.rocks"
 * console.log(pkg.description) // "Package from pantry: mercure.rocks"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mercure-rocks.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mercurerocksPackage = {
  /**
   * The display name of this package.
   */
  name: 'mercure.rocks' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mercure.rocks' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mercure.rocks' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mercure.rocks' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mercure.rocks -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mercure.rocks' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mercure.rocks/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MercurerocksPackage = typeof mercurerocksPackage
