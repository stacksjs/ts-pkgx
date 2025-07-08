/**
 * **getcomposer.org** - Package from pantry: getcomposer.org
 *
 * @domain `getcomposer.org`
 *
 * @install `launchpad install getcomposer.org`
 * @dependencies `php.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.getcomposerorg
 * console.log(pkg.name)        // "getcomposer.org"
 * console.log(pkg.description) // "Package from pantry: getcomposer.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getcomposer-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getcomposerorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'getcomposer.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getcomposer.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: getcomposer.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install getcomposer.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +getcomposer.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install getcomposer.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getcomposer.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GetcomposerorgPackage = typeof getcomposerorgPackage
