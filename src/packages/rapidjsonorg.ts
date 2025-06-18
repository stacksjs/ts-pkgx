/**
 * **rapidjson.org** - Package from pantry: rapidjson.org
 *
 * @domain `rapidjson.org`
 *
 * @install `launchpad install rapidjson.org`
 * @dependencies `cmake.org`, `doxygen.nl^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rapidjsonorg
 * console.log(pkg.name)        // "rapidjson.org"
 * console.log(pkg.description) // "Package from pantry: rapidjson.org"
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
  description: 'Package from pantry: rapidjson.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rapidjson.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'doxygen.nl^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rapidjson.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RapidjsonorgPackage = typeof rapidjsonorgPackage
