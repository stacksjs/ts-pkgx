/**
 * **localai.io** - Package from pantry: localai.io
 *
 * @domain `localai.io`
 *
 * @install `launchpad install localai.io`
 * @dependencies `openmp.llvm.org^18`, `go.dev^1.21`, `cmake.org^3`, ... (+9 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.localaiio
 * console.log(pkg.name)        // "localai.io"
 * console.log(pkg.description) // "Package from pantry: localai.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/localai-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const localaiioPackage = {
  /**
   * The display name of this package.
   */
  name: 'localai.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'localai.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: localai.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install localai.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openmp.llvm.org^18',
    'go.dev^1.21',
    'cmake.org^3',
    'grpc.io=1.68.2',
    'gnu.org/wget^1',
    'gnu.org/coreutils^9',
    'git-scm.org^2',
    'google.com/protobuf-go^1',
    'grpc.io/grpc-go^1',
    'gnu.org/gcc^14 # linux needs omp.h',
    'protobuf.dev~28.1.0',
    'llvm.org^18 # apple doens',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/localai.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LocalaiioPackage = typeof localaiioPackage
