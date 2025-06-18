/**
 * **koyeb.com** - Package from pantry: koyeb.com
 *
 * @domain `koyeb.com`
 *
 * @install `launchpad install koyeb.com`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.koyebcom
 * console.log(pkg.name)        // "koyeb.com"
 * console.log(pkg.description) // "Package from pantry: koyeb.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/koyeb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const koyebcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'koyeb.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'koyeb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: koyeb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install koyeb.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/koyeb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KoyebcomPackage = typeof koyebcomPackage
