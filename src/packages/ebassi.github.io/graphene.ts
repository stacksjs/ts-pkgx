/**
 * **graphene** - A thin layer of graphic data types
 *
 * @domain `ebassi.github.io/graphene`
 * @version `1.10.8` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +ebassi.github.io/graphene -- $SHELL -i`
 * @aliases `graphene`
 * @dependencies `gnome.org/glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.graphene
 * // Or access via domain
 * const samePkg = pantry.ebassigithubiographene
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ebassi.github.io/graphene"
 * console.log(pkg.description) // "A thin layer of graphic data types"
 * console.log(pkg.versions[0]) // "1.10.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ebassi-github-io/graphene.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphenePackage = {
  /**
   * The display name of this package.
   */
  name: 'ebassi.github.io/graphene' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ebassi.github.io/graphene' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A thin layer of graphic data types' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ebassi.github.io/graphene/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +ebassi.github.io/graphene -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'graphene',
  ] as const,
  fullPath: 'ebassi.github.io/graphene' as const,
}

export type GraphenePackage = typeof graphenePackage
