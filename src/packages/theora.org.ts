/**
 * **theora.org** - pkgx package
 *
 * @domain `theora.org`
 * @version `1.2.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/theora-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +theora.org -- $SHELL -i`
 * @dependencies `xiph.org/ogg`, `xiph.org/vorbis`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.theoraorg
 * console.log(pkg.name)        // "theora.org"
 * console.log(pkg.versions[0]) // "1.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/theora-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const theoraorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'theora.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'theora.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from theora.org' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/theora.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +theora.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg',
    'xiph.org/vorbis',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.0',
    '1.1.1',
  ] as const,
  aliases: [] as const,
  fullPath: 'theora.org' as const,
}

export type TheoraorgPackage = typeof theoraorgPackage
