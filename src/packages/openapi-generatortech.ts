/**
 * **openapi-generator.tech** - Package from pantry: openapi-generator.tech
 *
 * @domain `openapi-generator.tech`
 *
 * @install `launchpad install openapi-generator.tech`
 * @dependencies `openjdk.org^21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openapigeneratortech
 * console.log(pkg.name)        // "openapi-generator.tech"
 * console.log(pkg.description) // "Package from pantry: openapi-generator.tech"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openapi-generator-tech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openapigeneratortechPackage = {
  /**
   * The display name of this package.
   */
  name: 'openapi-generator.tech' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openapi-generator.tech' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openapi-generator.tech' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openapi-generator.tech' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openapi-generator.tech -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openapi-generator.tech' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openapi-generator.tech/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenapigeneratortechPackage = typeof openapigeneratortechPackage
