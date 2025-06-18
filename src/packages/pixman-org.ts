/**
 * **pixman.org** - pkgx package
 *
 * @domain `pixman.org`
 * @version `0.40.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +pixman.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pixmanorg
 * console.log(pkg.name)        // "pixman.org"
 * console.log(pkg.versions[0]) // "0.40.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pixman-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pixmanorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pixman.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pixman.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pixman.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pixman.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.40.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'pixman.org' as const,
}

export type PixmanorgPackage = typeof pixmanorgPackage
