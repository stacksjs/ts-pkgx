/**
 * **buildpacks.io** - Package from pantry: buildpacks.io
 *
 * @domain `buildpacks.io`
 *
 * @install `launchpad install buildpacks.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.buildpacksio
 * console.log(pkg.name)        // "buildpacks.io"
 * console.log(pkg.description) // "Package from pantry: buildpacks.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/buildpacks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const buildpacksioPackage = {
  /**
   * The display name of this package.
   */
  name: 'buildpacks.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'buildpacks.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: buildpacks.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install buildpacks.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/buildpacks.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BuildpacksioPackage = typeof buildpacksioPackage
