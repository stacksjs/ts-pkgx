/**
 * **scie-pants** - Package from pantry: pantsbuild.org/scie-pants
 *
 * @domain `pantsbuild.org/scie-pants`
 *
 * @install `launchpad install pantsbuild.org/scie-pants`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pantsbuildorgsciepants
 * console.log(pkg.name)        // "scie-pants"
 * console.log(pkg.description) // "Package from pantry: pantsbuild.org/scie-pants"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pantsbuild-org/scie-pants.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pantsbuildorgsciepantsPackage = {
  /**
   * The display name of this package.
   */
  name: 'scie-pants' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pantsbuild.org/scie-pants' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pantsbuild.org/scie-pants' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pantsbuild.org/scie-pants' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pantsbuild.org/scie-pants -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pantsbuild.org/scie-pants' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pantsbuild.org/scie-pants/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PantsbuildorgsciepantsPackage = typeof pantsbuildorgsciepantsPackage
