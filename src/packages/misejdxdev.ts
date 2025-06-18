/**
 * **mise.jdx.dev** - Package from pantry: mise.jdx.dev
 *
 * @domain `mise.jdx.dev`
 *
 * @install `launchpad install mise.jdx.dev`
 * @dependencies `openssl.org^1.1 # newer mise after 1.35.2 versions require openssl`, `libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2`, `rust-lang.org^1.78 # stdsimd changes`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.misejdxdev
 * console.log(pkg.name)        // "mise.jdx.dev"
 * console.log(pkg.description) // "Package from pantry: mise.jdx.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mise-jdx-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const misejdxdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'mise.jdx.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mise.jdx.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mise.jdx.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mise.jdx.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1 # newer mise after 1.35.2 versions require openssl',
    'libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2',
    'rust-lang.org^1.78 # stdsimd changes',
    'rust-lang.org/cargo',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mise.jdx.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MisejdxdevPackage = typeof misejdxdevPackage
