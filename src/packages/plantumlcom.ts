/**
 * **plantuml.com** - Package from pantry: plantuml.com
 *
 * @domain `plantuml.com`
 *
 * @install `launchpad install plantuml.com`
 * @dependencies `graphviz.org`, `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plantumlcom
 * console.log(pkg.name)        // "plantuml.com"
 * console.log(pkg.description) // "Package from pantry: plantuml.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plantuml-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plantumlcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'plantuml.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plantuml.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: plantuml.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install plantuml.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +plantuml.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install plantuml.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'graphviz.org',
    'openjdk.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plantuml.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PlantumlcomPackage = typeof plantumlcomPackage
