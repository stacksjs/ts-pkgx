/**
 * **jsonnet** - Jsonnet - The data templating language
 *
 * @domain `jsonnet.org`
 * @programs `jsonnet`, `jsonnetfmt`
 * @version `0.21.0` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/jsonnet-org.md
 * @install `sh <(curl https://pkgx.sh) +jsonnet.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jsonnetorg
 * console.log(pkg.name)        // "jsonnet"
 * console.log(pkg.description) // "Jsonnet - The data templating language"
 * console.log(pkg.programs)    // ["jsonnet", "jsonnetfmt"]
 * console.log(pkg.versions[0]) // "0.21.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jsonnet-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jsonnetorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'jsonnet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jsonnet.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Jsonnet - The data templating language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jsonnet.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +jsonnet.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jsonnet',
    'jsonnetfmt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.0',
    '0.20.0',
  ] as const,
  fullPath: 'jsonnet.org' as const,
  aliases: [] as const,
}

export type JsonnetorgPackage = typeof jsonnetorgPackage
