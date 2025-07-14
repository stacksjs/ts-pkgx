/**
 * **oberhumer.com/ucl** - pkgx package
 *
 * @domain `oberhumer.com/ucl`
 * @version `1.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install oberhumer.com/ucl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oberhumercomucl
 * console.log(pkg.name)        // "oberhumer.com/ucl"
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oberhumer-com/ucl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oberhumercomuclPackage = {
  /**
   * The display name of this package.
   */
  name: 'oberhumer.com/ucl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oberhumer.com/ucl' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oberhumer.com/ucl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oberhumer.com/ucl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +oberhumer.com/ucl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oberhumer.com/ucl' as const,
}

export type OberhumercomuclPackage = typeof oberhumercomuclPackage
