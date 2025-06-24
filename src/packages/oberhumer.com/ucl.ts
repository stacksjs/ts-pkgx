/**
 * **ucl** - Package from pantry: oberhumer.com/ucl
 *
 * @domain `oberhumer.com/ucl`
 *
 * @install `launchpad install oberhumer.com/ucl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oberhumercomucl
 * console.log(pkg.name)        // "ucl"
 * console.log(pkg.description) // "Package from pantry: oberhumer.com/ucl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com/ucl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oberhumercomuclPackage = {
  /**
   * The display name of this package.
   */
  name: 'ucl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oberhumer.com/ucl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: oberhumer.com/ucl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oberhumer.com/ucl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +oberhumer.com/ucl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oberhumer.com/ucl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oberhumer.com/ucl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OberhumercomuclPackage = typeof oberhumercomuclPackage
