/**
 * **maven.apache.org** - Package from pantry: maven.apache.org
 *
 * @domain `maven.apache.org`
 *
 * @install `launchpad install maven.apache.org`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mavenapacheorg
 * console.log(pkg.name)        // "maven.apache.org"
 * console.log(pkg.description) // "Package from pantry: maven.apache.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maven-apache-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mavenapacheorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'maven.apache.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'maven.apache.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: maven.apache.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install maven.apache.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/maven.apache.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MavenapacheorgPackage = typeof mavenapacheorgPackage
