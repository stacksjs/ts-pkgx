/**
 * **github.com/chrusty/protoc-gen-jsonschema** - pkgx package
 *
 * @domain `github.com/chrusty/protoc/gen-jsonschema`
 *
 * @install `pkgx github.com/chrusty/protoc-gen-jsonschema`
 * @aliases `github.com/chrusty/protoc-gen-jsonschema`, `chrusty/protoc-gen-jsonschema`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomchrustyprotocgenjsonschema
 * // Or access via domain
 * const samePkg = pantry.githubcomchrustyprotocgenjsonschema
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "chrusty"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/chrusty/protoc/gen-jsonschema.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomchrustyprotocgenjsonschemaPackage = {
  /**
   * The display name of this package.
   */
  name: 'chrusty' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/chrusty/protoc/gen-jsonschema' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/chrusty/protoc-gen-jsonschema' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/chrusty/protoc-gen-jsonschema',
    'chrusty/protoc-gen-jsonschema',
  ] as const,
  fullPath: 'github.com/chrusty/protoc-gen-jsonschema' as const,
}

export type GithubcomchrustyprotocgenjsonschemaPackage = typeof githubcomchrustyprotocgenjsonschemaPackage
