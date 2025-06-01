/**
 * **sbt** - sbt, the interactive build tool
 *
 * @domain `scala-sbt.org`
 * @programs `sbt`
 * @version `1.11.0` (19 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/scala-sbt-org.md
 *
 * @install `sh <(curl https://pkgx.sh) sbt`
 * @name `sbt`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sbt
 * // Or access via domain
 * const samePkg = pantry.scalasbtorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sbt"
 * console.log(pkg.description) // "sbt, the interactive build tool"
 * console.log(pkg.programs)    // ["sbt"]
 * console.log(pkg.versions[0]) // "1.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scala-sbt-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sbtPackage = {
  /**
   * The display name of this package.
   */
  name: 'sbt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scala-sbt.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'sbt, the interactive build tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/scala-sbt.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sbt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sbt',
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
    '1.11.0',
    '1.10.11',
    '1.10.10',
    '1.10.9',
    '1.10.7',
    '1.10.6',
    '1.10.5',
    '1.10.4',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.9',
    '1.9.8',
    '1.9.7',
    '1.9.6',
    '1.9.5',
    '1.9.4',
    '1.9.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'scala-sbt.org' as const,
}

export type SbtPackage = typeof sbtPackage
