/**
 * **plantuml** - Generate diagrams from textual description
 *
 * @domain `plantuml.com`
 * @programs `plantuml`
 * @version `1.2025.5` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install plantuml`
 * @name `plantuml`
 * @dependencies `graphviz.org`, `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.plantuml
 * // Or access via domain
 * const samePkg = pantry.plantumlcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "plantuml"
 * console.log(pkg.description) // "Generate diagrams from textual description"
 * console.log(pkg.programs)    // ["plantuml"]
 * console.log(pkg.versions[0]) // "1.2025.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plantuml-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plantumlPackage = {
  /**
   * The display name of this package.
   */
  name: 'plantuml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plantuml.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate diagrams from textual description' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plantuml.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install plantuml' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'plantuml',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'graphviz.org',
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2025.5',
    '1.2025.4',
    '1.2025.3',
    '1.2025.2',
    '1.2025.1',
    '1.2025.0',
    '1.2024.8',
    '1.2024.7',
    '1.2024.6',
    '1.2024.5',
    '1.2024.4',
    '1.2024.3',
    '1.2024.2',
    '1.2024.1',
    '1.2024.0',
    '1.2023.13',
    '1.2023.12',
    '1.2023.11',
    '1.2023.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) plantuml -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install plantuml' as const,
}

export type PlantumlPackage = typeof plantumlPackage
