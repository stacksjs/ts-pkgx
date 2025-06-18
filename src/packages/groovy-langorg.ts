/**
 * **groovy-lang.org** - Package from pantry: groovy-lang.org
 *
 * @domain `groovy-lang.org`
 *
 * @install `launchpad install groovy-lang.org`
 * @dependencies `openjdk.org^17`, `waterlan.home.xs4all.nl/dos2unix`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.groovylangorg
 * console.log(pkg.name)        // "groovy-lang.org"
 * console.log(pkg.description) // "Package from pantry: groovy-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/groovy-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const groovylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'groovy-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'groovy-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: groovy-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install groovy-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^17',
    'waterlan.home.xs4all.nl/dos2unix',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/groovy-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GroovylangorgPackage = typeof groovylangorgPackage
