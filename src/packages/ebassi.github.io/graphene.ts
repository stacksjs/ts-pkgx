/**
 * **graphene** - Package from pantry: ebassi.github.io/graphene
 *
 * @domain `ebassi.github.io/graphene`
 *
 * @install `launchpad install ebassi.github.io/graphene`
 * @dependencies `gnome.org/glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ebassigithubiographene
 * console.log(pkg.name)        // "graphene"
 * console.log(pkg.description) // "Package from pantry: ebassi.github.io/graphene"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ebassi-github-io/graphene.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ebassigithubiographenePackage = {
  /**
   * The display name of this package.
   */
  name: 'graphene' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ebassi.github.io/graphene' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ebassi.github.io/graphene' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ebassi.github.io/graphene' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ebassi.github.io/graphene -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ebassi.github.io/graphene' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ebassi.github.io/graphene/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EbassigithubiographenePackage = typeof ebassigithubiographenePackage
