/**
 * **lzo** - Package from pantry: oberhumer.com/lzo
 *
 * @domain `oberhumer.com/lzo`
 *
 * @install `launchpad install oberhumer.com/lzo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oberhumercomlzo
 * console.log(pkg.name)        // "lzo"
 * console.log(pkg.description) // "Package from pantry: oberhumer.com/lzo"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com/lzo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oberhumercomlzoPackage = {
  /**
   * The display name of this package.
   */
  name: 'lzo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oberhumer.com/lzo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: oberhumer.com/lzo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oberhumer.com/lzo' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +oberhumer.com/lzo -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oberhumer.com/lzo' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oberhumer.com/lzo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OberhumercomlzoPackage = typeof oberhumercomlzoPackage
