/**
 * **github.com/davegamble/cjson** - Ultralightweight JSON parser in ANSI C
 *
 * @domain `github.com/DaveGamble/cJSON`
 * @version `1.7.18` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/DaveGamble/cJSON -- $SHELL -i`
 * @aliases `github.com/davegamble/cjson`, `DaveGamble/cJSON`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomdavegamblecjson
 * // Or access via domain
 * const samePkg = pantry.githubcomdavegamblecjson
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/DaveGamble/cJSON"
 * console.log(pkg.description) // "Ultralightweight JSON parser in ANSI C"
 * console.log(pkg.versions[0]) // "1.7.18" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DaveGamble/cJSON.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdavegamblecjsonPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/DaveGamble/cJSON' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DaveGamble/cJSON' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Ultralightweight JSON parser in ANSI C' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/DaveGamble/cJSON/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/DaveGamble/cJSON -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.18',
    '1.7.17',
    '1.7.16',
    '1.7.15',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/davegamble/cjson',
    'DaveGamble/cJSON',
  ] as const,
  fullPath: 'github.com/DaveGamble/cJSON' as const,
}

export type GithubcomdavegamblecjsonPackage = typeof githubcomdavegamblecjsonPackage
