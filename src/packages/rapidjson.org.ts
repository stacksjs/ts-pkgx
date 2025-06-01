/**
 * **+rapidjson.org -- $SHELL -i** - A fast JSON parser/generator for C++ with both SAX/DOM style API
 *
 * @domain `rapidjson.org`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/rapidjson-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +rapidjson.org -- $SHELL -i`
 * @aliases `+rapidjson.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.rapidjsonorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.rapidjsonorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rapidjson.org"
 * console.log(pkg.description) // "A fast JSON parser/generator for C++ with both ..."
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rapidjson-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rapidjsonorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'rapidjson.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rapidjson.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast JSON parser/generator for C++ with both SAX/DOM style API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rapidjson.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +rapidjson.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+rapidjson.org -- $SHELL -i',
  ] as const,
  fullPath: 'rapidjson.org' as const,
}

export type RapidjsonorgSHELLiPackage = typeof rapidjsonorgSHELLiPackage
