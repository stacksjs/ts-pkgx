/**
 * **caddyserver.com** - Package from pantry: caddyserver.com
 *
 * @domain `caddyserver.com`
 *
 * @install `launchpad install caddyserver.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caddyservercom
 * console.log(pkg.name)        // "caddyserver.com"
 * console.log(pkg.description) // "Package from pantry: caddyserver.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/caddyserver-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caddyservercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'caddyserver.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'caddyserver.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: caddyserver.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install caddyserver.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/caddyserver.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CaddyservercomPackage = typeof caddyservercomPackage
