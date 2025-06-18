/**
 * **squawkhq.com** - Package from pantry: squawkhq.com
 *
 * @domain `squawkhq.com`
 *
 * @install `launchpad install squawkhq.com`
 * @dependencies `rust-lang.org>=1.65`, `rust-lang.org/cargo`, `openssl.org`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.squawkhqcom
 * console.log(pkg.name)        // "squawkhq.com"
 * console.log(pkg.description) // "Package from pantry: squawkhq.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/squawkhq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const squawkhqcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'squawkhq.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'squawkhq.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: squawkhq.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install squawkhq.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
    'openssl.org',
    'perl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/squawkhq.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SquawkhqcomPackage = typeof squawkhqcomPackage
