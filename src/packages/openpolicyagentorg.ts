/**
 * **openpolicyagent.org** - Package from pantry: openpolicyagent.org
 *
 * @domain `openpolicyagent.org`
 *
 * @install `launchpad install openpolicyagent.org`
 * @dependencies `go.dev^1.21`, `gnu.org/grep`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openpolicyagentorg
 * console.log(pkg.name)        // "openpolicyagent.org"
 * console.log(pkg.description) // "Package from pantry: openpolicyagent.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openpolicyagent-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openpolicyagentorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'openpolicyagent.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openpolicyagent.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openpolicyagent.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openpolicyagent.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
    'gnu.org/grep',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openpolicyagent.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenpolicyagentorgPackage = typeof openpolicyagentorgPackage
