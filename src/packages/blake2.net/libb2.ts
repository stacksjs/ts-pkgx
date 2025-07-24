/**
 * **libb2** - Package from pantry: blake2.net/libb2
 *
 * @domain `blake2.net/libb2`
 *
 * @install `launchpad install blake2.net/libb2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.blake2netlibb2
 * console.log(pkg.name)        // "libb2"
 * console.log(pkg.description) // "Package from pantry: blake2.net/libb2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/blake2-net/libb2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const blake2netlibb2Package = {
  /**
   * The display name of this package.
   */
  name: 'libb2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'blake2.net/libb2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: blake2.net/libb2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install blake2.net/libb2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +blake2.net/libb2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install blake2.net/libb2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/blake2.net/libb2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Blake2netlibb2Package = typeof blake2netlibb2Package
