/**
 * **gitleaks** - Find secrets with Gitleaks 🔑
 *
 * @domain `gitleaks.io`
 * @programs `gitleaks`
 * @version `8.27.2` (29 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) gitleaks`
 * @name `gitleaks`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gitleaks
 * // Or access via domain
 * const samePkg = pantry.gitleaksio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gitleaks"
 * console.log(pkg.description) // "Find secrets with Gitleaks 🔑"
 * console.log(pkg.programs)    // ["gitleaks"]
 * console.log(pkg.versions[0]) // "8.27.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitleaks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitleaksPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitleaks' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitleaks.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Find secrets with Gitleaks 🔑' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitleaks.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gitleaks' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gitleaks',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.27.2',
    '8.27.1',
    '8.27.0',
    '8.26.0',
    '8.25.1',
    '8.25.0',
    '8.24.3',
    '8.24.2',
    '8.24.0',
    '8.23.3',
    '8.23.2',
    '8.23.1',
    '8.23.0',
    '8.22.1',
    '8.22.0',
    '8.21.4',
    '8.21.3',
    '8.21.2',
    '8.21.1',
    '8.21.0',
    '8.20.1',
    '8.20.0',
    '8.19.3',
    '8.19.2',
    '8.19.1',
    '8.18.4',
    '8.18.3',
    '8.18.2',
    '8.18.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gitleaks.io' as const,
}

export type GitleaksPackage = typeof gitleaksPackage
