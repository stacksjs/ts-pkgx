/**
 * **scala-sbt.org** - Package from pantry: scala-sbt.org
 *
 * @domain `scala-sbt.org`
 *
 * @install `launchpad install scala-sbt.org`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.scalasbtorg
 * console.log(pkg.name)        // "scala-sbt.org"
 * console.log(pkg.description) // "Package from pantry: scala-sbt.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scala-sbt-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scalasbtorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'scala-sbt.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scala-sbt.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: scala-sbt.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install scala-sbt.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scala-sbt.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ScalasbtorgPackage = typeof scalasbtorgPackage
