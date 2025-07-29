/**
 * **ncdu** - Package from pantry: dev.yorhel.nl/ncdu
 *
 * @domain `dev.yorhel.nl/ncdu`
 *
 * @install `launchpad install dev.yorhel.nl/ncdu`
 * @dependencies `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.devyorhelnlncdu
 * console.log(pkg.name)        // "ncdu"
 * console.log(pkg.description) // "Package from pantry: dev.yorhel.nl/ncdu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dev-yorhel-nl/ncdu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const devyorhelnlncduPackage = {
  /**
   * The display name of this package.
   */
  name: 'ncdu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dev.yorhel.nl/ncdu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dev.yorhel.nl/ncdu' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dev.yorhel.nl/ncdu' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dev.yorhel.nl/ncdu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dev.yorhel.nl/ncdu' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'invisible-island.net/ncurses',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dev.yorhel.nl/ncdu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DevyorhelnlncduPackage = typeof devyorhelnlncduPackage
