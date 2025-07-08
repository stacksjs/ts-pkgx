/**
 * **doxygen.nl** - Package from pantry: doxygen.nl
 *
 * @domain `doxygen.nl`
 *
 * @install `launchpad install doxygen.nl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.doxygennl
 * console.log(pkg.name)        // "doxygen.nl"
 * console.log(pkg.description) // "Package from pantry: doxygen.nl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/doxygen-nl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doxygennlPackage = {
  /**
   * The display name of this package.
   */
  name: 'doxygen.nl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'doxygen.nl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: doxygen.nl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install doxygen.nl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +doxygen.nl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install doxygen.nl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/doxygen.nl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DoxygennlPackage = typeof doxygennlPackage
