/**
 * **mise.jdx.dev** - Package from pantry: mise.jdx.dev
 *
 * @domain `mise.jdx.dev`
 *
 * @install `launchpad install mise.jdx.dev`
 * @dependencies `openssl.org^1.1 # newer mise after 1.35.2 versions require openssl`, `libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2`
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mise.jdx.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mise.jdx.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mise.jdx.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1 # newer mise after 1.35.2 versions require openssl',
    'libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mise.jdx.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MisejdxdevPackage = typeof misejdxdevPackage
