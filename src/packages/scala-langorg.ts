/**
 * **scala-lang.org** - Package from pantry: scala-lang.org
 *
 * @domain `scala-lang.org`
 *
 * @install `launchpad install scala-lang.org`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.scalalangorg
 * console.log(pkg.name)        // "scala-lang.org"
 * console.log(pkg.description) // "Package from pantry: scala-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scala-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scalalangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'scala-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scala-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: scala-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install scala-lang.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scala-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ScalalangorgPackage = typeof scalalangorgPackage
