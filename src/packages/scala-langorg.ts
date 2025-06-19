/**
 * **scala-lang.org** - The Scala 3 compiler, also known as Dotty.
 *
 * @domain `scala-lang.org`
 * @programs `scalac`, `scala`, `scala-cli`, `sbtn`, `amm`
 * @version `3.7.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +scala-lang.org -- $SHELL -i`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.scalalangorg
 * console.log(pkg.name)        // "scala-lang.org"
 * console.log(pkg.description) // "The Scala 3 compiler, also known as Dotty."
 * console.log(pkg.programs)    // ["scalac", "scala", ...]
 * console.log(pkg.versions[0]) // "3.7.1" (latest)
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
  description: 'The Scala 3 compiler, also known as Dotty.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scala-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +scala-lang.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scalac',
    'scala',
    'scala-cli',
    'sbtn',
    'amm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.7.1',
    '3.7.0',
    '3.6.4',
    '3.6.3',
    '3.6.2',
    '3.5.2',
    '3.5.1',
    '3.3.6',
    '3.3.5',
  ] as const,
  aliases: [] as const,
}

export type ScalalangorgPackage = typeof scalalangorgPackage
