/**
 * **hurl.dev** - Package from pantry: hurl.dev
 *
 * @domain `hurl.dev`
 *
 * @install `launchpad install hurl.dev`
 * @dependencies `gnome.org/libxml2`, `curl.se`, `rust-lang.org>=1.65`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hurldev
 * console.log(pkg.name)        // "hurl.dev"
 * console.log(pkg.description) // "Package from pantry: hurl.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hurl-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hurldevPackage = {
  /**
   * The display name of this package.
   */
  name: 'hurl.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hurl.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hurl.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install hurl.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
    'curl.se',
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hurl.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HurldevPackage = typeof hurldevPackage
