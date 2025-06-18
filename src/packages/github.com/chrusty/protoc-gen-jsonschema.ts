/**
 * **protoc-gen-jsonschema** - Protobuf to JSON-Schema compiler
 *
 * @domain `github.com/chrusty/protoc-gen-jsonschema`
 * @programs `protoc-gen-jsonschema`
 * @version `1.4.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) protoc-gen-jsonschema`
 * @name `protoc-gen-jsonschema`
 * @aliases `chrusty/protoc-gen-jsonschema`
 * @dependencies `protobuf.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.protocgenjsonschema
 * // Or access via domain
 * const samePkg = pantry.githubcomchrustyprotocgenjsonschema
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "protoc-gen-jsonschema"
 * console.log(pkg.description) // "Protobuf to JSON-Schema compiler"
 * console.log(pkg.programs)    // ["protoc-gen-jsonschema"]
 * console.log(pkg.versions[0]) // "1.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/chrusty/protoc-gen-jsonschema.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protocgenjsonschemaPackage = {
  /**
   * The display name of this package.
   */
  name: 'protoc-gen-jsonschema' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/chrusty/protoc-gen-jsonschema' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Protobuf to JSON-Schema compiler' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/chrusty/protoc-gen-jsonschema/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) protoc-gen-jsonschema' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'protoc-gen-jsonschema',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'chrusty/protoc-gen-jsonschema',
  ] as const,
  fullPath: 'github.com/chrusty/protoc-gen-jsonschema' as const,
}

export type ProtocgenjsonschemaPackage = typeof protocgenjsonschemaPackage
