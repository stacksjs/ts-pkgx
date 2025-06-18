/**
 * **jetporch.com** - Package from pantry: jetporch.com
 *
 * @domain `jetporch.com`
 *
 * @install `launchpad install jetporch.com`
 * @dependencies `freedesktop.org/pkg-config`, `openssl.org`, `zlib.net`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jetporchcom
 * console.log(pkg.name)        // "jetporch.com"
 * console.log(pkg.description) // "Package from pantry: jetporch.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jetporch-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jetporchcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'jetporch.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jetporch.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jetporch.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jetporch.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config',
    'openssl.org',
    'zlib.net',
    'rust-lang.org>=1.70',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jetporch.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JetporchcomPackage = typeof jetporchcomPackage
