/**
 * **ebassi.github.io/graphene** - A thin layer of graphic data types
 *
 * @domain `ebassi.github.io/graphene`
 * @version `1.10.8` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ebassi.github.io/graphene`
 * @dependencies `gnome.org/glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ebassigithubiographene
 * console.log(pkg.name)        // "ebassi.github.io/graphene"
 * console.log(pkg.description) // "A thin layer of graphic data types"
 * console.log(pkg.versions[0]) // "1.10.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ebassi-github-io/graphene.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ebassigithubiographenePackage = {
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ebassi.github.io/graphene' as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ebassi.github.io/graphene -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ebassi.github.io/graphene' as const,
}

export type EbassigithubiographenePackage = typeof ebassigithubiographenePackage
