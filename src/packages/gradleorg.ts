/**
 * **gradle.org** - Package from pantry: gradle.org
 *
 * @domain `gradle.org`
 *
 * @install `launchpad install gradle.org`
 * @dependencies `openjdk.org`, `openjdk.org^17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gradleorg
 * console.log(pkg.name)        // "gradle.org"
 * console.log(pkg.description) // "Package from pantry: gradle.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gradle-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gradleorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gradle.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gradle.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gradle.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gradle.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
    'openjdk.org^17',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gradle.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GradleorgPackage = typeof gradleorgPackage
