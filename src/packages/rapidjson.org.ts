/**
 * **rapidjson.org** - A fast JSON parser/generator for C++ with both SAX/DOM style API
 *
 * @domain `rapidjson.org`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/rapidjson-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +rapidjson.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rapidjsonorg
 * console.log(pkg.name)        // "rapidjson.org"
 * console.log(pkg.description) // "A fast JSON parser/generator for C++ with both ..."
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rapidjson-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rapidjsonorgPackage = {
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
  aliases: [] as const,
  fullPath: 'rapidjson.org' as const,
}

export type RapidjsonorgPackage = typeof rapidjsonorgPackage
